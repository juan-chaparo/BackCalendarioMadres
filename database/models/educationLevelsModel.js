const { Model, DataTypes } = require('sequelize');

const  EDUCATION_LEVELS_TABLE = 'am_education_levels';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const educationLevelsSchema = {
    
    idEducationLevel: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_education_level'
    },
    nameEducationLevel: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_education_level'
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

class educationLevels extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });
        
        this.hasMany(models.av_agents_community,{
            foreignKey: 'idEducationLevel',
            as: 'agentsCommunityEducationLevels'
        });

        this.hasMany(models.av_attendants,{
            foreignKey: 'idEducationLevel',
            as: 'attendantsEducationLevels'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: EDUCATION_LEVELS_TABLE,
            modelName: 'am_education_levels',
            timestamps: false
        }
    }
}

module.exports = { EDUCATION_LEVELS_TABLE, educationLevelsSchema, educationLevels }