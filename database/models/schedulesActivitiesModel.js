const { Model, DataTypes } = require('sequelize');

const  SCHEDULES_ACTIVITIES_TABLE = 'av_schedule_activities';

const { ACTIVITIES_TABLE } = require('./activitiesModel');
const { SCHEDULE_TABLE } = require('./scheduleModule');

const scheduleActivitiesSchema = {
    
    idScheduleActivity: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_schedule_activity'
    },
    idActivity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_activity',
        references: {
            model: ACTIVITIES_TABLE,
            key: 'id_activity'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idSchedule: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_schedule',
        references: {
            model: SCHEDULE_TABLE,
            key: 'id_schedule'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class SchedulesActivities extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_activities,{
            foreignKey: 'idActivity',
            as: 'activity'
        });

        this.belongsTo(models.av_schedule,{
            foreignKey: 'idSchedule',
            as: 'schedule'
        });

        this.hasMany(models.av_activity_child,{
            foreignKey: 'idScheduleActivity',
            as: 'activityChildsScheduleActivity'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: SCHEDULES_ACTIVITIES_TABLE,
            modelName: 'av_schedule_activities',
            timestamps: false
        }
    }
}

module.exports = { SCHEDULES_ACTIVITIES_TABLE, scheduleActivitiesSchema, SchedulesActivities }