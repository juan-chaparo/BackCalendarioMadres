const { Model, DataTypes, Sequelize } = require('sequelize');

const  ACTIVITIES_CHILD_TABLE = 'av_activity_child';

const { CHILD_UDS_TABLE } = require('./childUdsModel');
const { SCHEDULES_ACTIVITIES_TABLE } = require('./schedulesActivitiesModel');

const activitiesChildSchema = {
    
    idActivityChild: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_activity_child'
    },
    idScheduleActivity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_schedule_activity',
        references: {
            model: SCHEDULES_ACTIVITIES_TABLE,
            key: 'id_schedule_activity'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idChildUds: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_child_uds',
        references: {
            model: CHILD_UDS_TABLE,
            key: 'id_child_uds'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(2000)
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'date_admission',
        defaultValue: Sequelize.NOW
    },
    updt: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    assistance: {
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

class ActivityChlid extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_schedule_activities,{
            foreignKey: 'idScheduleActivity',
            as: 'scheduleActivities'
        });
        
        this.belongsTo(models.av_child_uds,{
            foreignKey: 'idChildUds',
            as: 'childsUds'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ACTIVITIES_CHILD_TABLE,
            modelName: 'av_activity_child',
            timestamps: false
        }
    }
}

module.exports = { ACTIVITIES_CHILD_TABLE, activitiesChildSchema, ActivityChlid }