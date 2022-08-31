const { Model, DataTypes, Sequelize } = require('sequelize');

const  WITHDRAWAL_TABLE = 'av_withdrawal';

const { CHILDS_TABLE } = require('./childsModel');
const { REASON_WITHDRAWALS_TABLE } = require('./reasonWithdrawalModel');

const withdrawalSchema = {
    
    idWithdrawal: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_Withdrawal'
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
    idReason: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_reason',
        references: {
            model: REASON_WITHDRAWALS_TABLE,
            key: 'id_reason_whitdrawal'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class Withdrawal extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_childs,{
            foreignKey: 'idChild',
            as: 'child'
        });

        this.belongsTo(models.am_reason_whitdrawals,{
            foreignKey: 'idReason',
            as: 'reason'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: WITHDRAWAL_TABLE,
            modelName: 'av_withdrawal',
            timestamps: false
        }
    }
}

module.exports = { WITHDRAWAL_TABLE, withdrawalSchema, Withdrawal }