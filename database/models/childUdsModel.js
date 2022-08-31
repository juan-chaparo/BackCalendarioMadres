const { Model, DataTypes, Sequelize } = require('sequelize');

const  CHILD_UDS_TABLE = 'av_child_uds';

const { CHILDS_TABLE } = require('./childsModel');
const { AGENTS_UDS_TABLE } = require('./agentsUdsModel');

const childUdsSchema = {
    
    idChildUds: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_child_uds'
    },
    idChild: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_child',
        references: {
            model: CHILDS_TABLE,
            key: 'id_child'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

class ChildUds extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_childs,{
            foreignKey: 'idChild',
            as: 'child'
        });

        this.belongsTo(models.av_agents_uds,{
            foreignKey: 'idAgentUds',
            as: 'agentUds'
        });

        this.hasMany(models.av_activity_child,{
            foreignKey: 'idChildUds',
            as: 'activitiesChildsChildsUds'
        });

        this.hasMany(models.av_child_uds_weigth,{
            foreignKey: 'idChildUds',
            as: 'childsUdsWeigthsChildsUds'
        });

        this.hasMany(models.av_form_ram_day,{
            foreignKey: 'idChildUds',
            as: 'formRamDaysChildsUds'
        });

        this.hasMany(models.av_tracing_child,{
            foreignKey: 'idChildUds',
            as: 'tracingChildsChildsUds'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: CHILD_UDS_TABLE,
            modelName: 'av_child_uds',
            timestamps: false
        }
    }
}

module.exports = { CHILD_UDS_TABLE, childUdsSchema, ChildUds }