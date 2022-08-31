const { Model, DataTypes, Sequelize } = require('sequelize');

const  FORM_RAM_DAY_TABLE = 'av_form_ram_day';

const { ATTENDANCES_TABLE } = require('./attendancesModel');
const { CHILD_UDS_TABLE } = require('./childUdsModel');

const formRamDaySchema = {
    
    idFormRamDay: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_form_ram_day'
    },
    idAttendance: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_attendance',
        references: {
            model: ATTENDANCES_TABLE,
            key: 'id_attendance'
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
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class FormRamDay extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_attendances,{
            foreignKey: 'idAttendance',
            as: 'attendance'
        });

        this.belongsTo(models.av_child_uds,{
            foreignKey: 'idChildUds',
            as: 'childUds'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: FORM_RAM_DAY_TABLE,
            modelName: 'av_form_ram_day',
            timestamps: false
        }
    }
}

module.exports = { FORM_RAM_DAY_TABLE, formRamDaySchema, FormRamDay }