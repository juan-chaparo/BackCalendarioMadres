const { Model, DataTypes, Sequelize } = require('sequelize');

const  CHILD_UDS_WEIGTH_TABLE = 'av_child_uds_weigth';

const { CHILD_UDS_TABLE } = require('./childUdsModel');

const ChildUdsWeigthSchema = {
    
    idChildUdsWeigth: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_child_uds_weigth'
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
    weigth: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    heigth: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class ChildUdsWeigth extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_child_uds,{
            foreignKey: 'idChildUds',
            as: 'childUds'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: CHILD_UDS_WEIGTH_TABLE,
            modelName: 'av_child_uds_weigth',
            timestamps: false
        }
    }
}

module.exports = { CHILD_UDS_WEIGTH_TABLE, ChildUdsWeigthSchema, ChildUdsWeigth }