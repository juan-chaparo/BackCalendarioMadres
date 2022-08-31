const { Model, DataTypes, Sequelize } = require('sequelize');

const  COMMUNITY_TABLE = 'av_community';

const { SCHEDULE_TABLE } = require('./scheduleModule');

const communitySchema = {
    
    idCommunity: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_community'
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

class Community extends Model {
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
            tableName: COMMUNITY_TABLE,
            modelName: 'av_community',
            timestamps: false
        }
    }
}

module.exports = { COMMUNITY_TABLE, communitySchema, Community }