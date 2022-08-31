const { Model, DataTypes, Sequelize } = require('sequelize');

const  AGENTS_UDS_TABLE = 'av_agents_uds';

const { AGENTS_COMMUNITY_TABLE } = require('./agentsComunityModel');
const { USER_TABLE } = require('./userModel');
const { UDS_TABLE } = require('./udsModel');

const agentsUdsSchema = {
    
    idAgentUds: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_agent_uds'
    },
    idAgentCommunity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_agent_community',
        references: {
            model: AGENTS_COMMUNITY_TABLE,
            key: 'id_agent_community'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idUds: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_uds',
        references: {
            model: UDS_TABLE,
            key: 'id_uds'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    },
    idUser: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_user',
        references: {
            model: USER_TABLE,
            key: 'id_user'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class AgentsUds extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_agents_community,{
            foreignKey: 'idAgentCommunity',
            as: 'agentCommunity'
        });

        this.belongsTo(models.av_users,{
            foreignKey: 'idUser',
            as: 'agentUds'
        });

        this.belongsTo(models.av_uds,{
            foreignKey: 'idUds',
            as: 'uds'
        });

        this.hasMany(models.av_child_uds,{
            foreignKey: 'idAgentUds',
            as: 'childsAgentsUds'
        });

        this.hasMany(models.av_schedule,{
            foreignKey: 'idAgentUds',
            as: 'schedulesAgentsUds'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: AGENTS_UDS_TABLE,
            modelName: 'av_agents_uds',
            timestamps: false
        }
    }
}

module.exports = { AGENTS_UDS_TABLE, agentsUdsSchema, AgentsUds }