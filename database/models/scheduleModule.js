const { Model, DataTypes, Sequelize } = require('sequelize');

const  SCHEDULE_TABLE = 'av_schedule';

const { AGENTS_UDS_TABLE } = require('./agentsUdsModel');

const scheduleSchema = {
    
    idSchedule: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_schedule'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    idAgentUds: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_agent_uds',
        references: {
            model: AGENTS_UDS_TABLE,
            key: 'id_agent_uds'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    startSchedule: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'start_schedule'
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class Schedule extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_agents_uds,{
            foreignKey: 'idAgentUds',
            as: 'agentUds'
        });

        this.hasMany(models.av_community,{
            foreignKey: 'idSchedule',
            as: 'communitiesSchedules'
        });

        this.hasMany(models.av_diary,{
            foreignKey: 'idSchedule',
            as: 'diarySchedules'
        });

        this.hasMany(models.av_schedule_activities,{
            foreignKey: 'idSchedule',
            as: 'schedulesActivitiesSchedules'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: SCHEDULE_TABLE,
            modelName: 'av_schedule',
            timestamps: false
        }
    }
}

module.exports = { SCHEDULE_TABLE, scheduleSchema, Schedule }