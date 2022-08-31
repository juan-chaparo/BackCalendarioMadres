const { Model, DataTypes } = require('sequelize');

const  DIARY_TABLE = 'av_diary';

const { SCHEDULE_TABLE } = require('./scheduleModule');

const diarySchema = {
    
    idDiary: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_diary'
    },
    idSchedule: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_schedule',
        references: {
            model: SCHEDULE_TABLE,
            key: 'id_schedule'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    dateDiary: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'date_diary'
    }
};

class Diary extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_schedule,{
            foreignKey: 'idSchedule',
            as: 'schedule'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: DIARY_TABLE,
            modelName: 'av_diary',
            timestamps: false
        }
    }
}

module.exports = { DIARY_TABLE, diarySchema, Diary }