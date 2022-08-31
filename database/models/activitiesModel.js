const { Model, DataTypes } = require('sequelize');

const  ACTIVITIES_TABLE = 'av_activities';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const activitiesSchema = {
    
    idActivity: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_activity'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(2000),
    },
    variants: {
        allowNull: false,
        type: DataTypes.STRING(2000)
    },
    img: {
        allowNull: true,
        type: DataTypes.STRING(1500)
    },
    video: {
        allowNull: true,
        type: DataTypes.STRING(1500)
    },
    adaptationSmallPrice: {
        allowNull: true,
        type: DataTypes.STRING(2000),
        field: 'adaptation_small_price'
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    duration: {
        allowNull: false,
        type: DataTypes.INTEGER
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

class Activities extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_activities_contributions,{
            foreignKey: 'idActivity',
            as: 'activities'
        });

        this.hasMany(models.av_activities_materials,{
            foreignKey: 'idActivity',
            as: 'activitiesMaterials'
        });

        this.hasMany(models.av_schedule_activities,{
            foreignKey: 'idActivity',
            as: 'SchedulesActivities'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ACTIVITIES_TABLE,
            modelName: 'av_activities',
            timestamps: false
        }
    }
}

module.exports = { ACTIVITIES_TABLE, activitiesSchema, Activities }