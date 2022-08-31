const { Model, DataTypes } = require('sequelize');

const  REASON_WITHDRAWALS_TABLE = 'am_reason_whitdrawals';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const reasonWhitdrawalsSchema = {
    
    idReasonWhitdrawal: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_reason_whitdrawal'
    },
    nameReasonWhitdrawal: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_reason_whitdrawal'
    },
    abbreviation:{
        allowNull: false,
        type: DataTypes.STRING(5)
    },
    idLenguage: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_lenguage',
        references: {
            model: LENGUAGE_TABLE,
            key: 'id_lenguage'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class ReasonWhitdrawal extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_withdrawal,{
            foreignKey: 'idReasonWhitdrawal',
            as: 'withdrawalsReasons'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: REASON_WITHDRAWALS_TABLE,
            modelName: 'am_reason_whitdrawals',
            timestamps: false
        }
    }
}

module.exports = { REASON_WITHDRAWALS_TABLE, reasonWhitdrawalsSchema, ReasonWhitdrawal }