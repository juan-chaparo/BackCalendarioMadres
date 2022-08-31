const { Model, DataTypes, Sequelize } = require('sequelize');

const { CHILD_UDS_TABLE } = require('./childUdsModel');
const { ASPECTS_TABLE } = require('./aspectsModel');

const  TRACING_CHILD_TABLE = 'av_tracing_child';

const tracingChildSchema = {
    
    idTracingChild: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_tracing_child'
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
    idAspect: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_aspect',
        references: {
            model: ASPECTS_TABLE,
            key: 'id_aspect'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(1500)
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class TracingChild extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_child_uds,{
            foreignKey: 'idChildUds',
            as: 'childUds'
        });

        this.belongsTo(models.am_aspects,{
            foreignKey: 'idAspect',
            as: 'aspect'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: TRACING_CHILD_TABLE,
            modelName: 'av_tracing_child',
            timestamps: false
        }
    }
}

module.exports = { TRACING_CHILD_TABLE, tracingChildSchema, TracingChild }