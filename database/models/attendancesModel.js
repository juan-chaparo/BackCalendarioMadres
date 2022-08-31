const { Model, DataTypes } = require('sequelize');

const  ATTENDANCES_TABLE = 'am_attendances';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const attendancesSchema = {
    
    idAttendance: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_attendance'
    },
    nameAttendance: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_attendance'
    },
    abbreviation: {
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

class Attendances extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_form_ram_day,{
            foreignKey: 'idAttendance',
            as: 'formRamDaysAttendances'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ATTENDANCES_TABLE,
            modelName: 'am_attendances',
            timestamps: false
        }
    }
}

module.exports = { ATTENDANCES_TABLE, attendancesSchema, Attendances }