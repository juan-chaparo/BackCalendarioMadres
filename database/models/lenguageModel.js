const { Model, DataTypes } = require('sequelize');

const  LENGUAGE_TABLE = 'am_lenguage';

const LenguageSchema = {
    
    idLenguage: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_lenguage'
    },
    nameLenguage: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_lenguage'
    }
};

class Lenguage extends Model {
    static associate(models)
    {
        this.hasMany(models.av_activities,{
            foreignKey: 'idLenguage',
            as: 'activitiesLenguages'
        });

        this.hasMany(models.am_rol,{
            foreignKey: 'idLenguage',
            as: 'rolLenguages'
        });

        this.hasMany(models.av_contribution,{
            foreignKey: 'idLenguage',
            as: 'contributionsLenguages'
        });

        this.hasMany(models.am_types_contributions,{
            foreignKey: 'idLenguage',
            as: 'typesContributionsLenguages'
        });

        this.hasMany(models.am_materials,{
            foreignKey: 'idLenguage',
            as: 'materialsLenguages'
        });

        this.hasMany(models.am_aspects,{
            foreignKey: 'idLenguage',
            as: 'aspectsLenguages'
        });

        this.hasMany(models.am_attendances,{
            foreignKey: 'idLenguage',
            as: 'attendancesLenguages'
        });

        this.hasMany(models.am_docs_types,{
            foreignKey: 'idLenguage',
            as: 'docsTypesLenguages'
        });

        this.hasMany(models.am_education_levels,{
            foreignKey: 'idLenguage',
            as: 'educationLevelsLenguages'
        });

        this.hasMany(models.am_genders,{
            foreignKey: 'idLenguage',
            as: 'gendersLenguages'
        });

        this.hasMany(models.am_population_types,{
            foreignKey: 'idLenguage',
            as: 'populationTypesLenguages'
        });

        this.hasMany(models.am_reason_whitdrawals,{
            foreignKey: 'idLenguage',
            as: 'reasonWhitdrawalsLenguages'
        });
        
        this.hasMany(models.am_relationships,{
            foreignKey: 'idLenguage',
            as: 'relationshipsLenguages'
        });

        this.hasMany(models.am_services_modalities,{
            foreignKey: 'idLenguage',
            as: 'servicesModalitiesLenguages'
        });

        this.hasMany(models.am_services_types,{
            foreignKey: 'idLenguage',
            as: 'servicesTypesLenguages'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: LENGUAGE_TABLE,
            modelName: 'am_lenguage',
            timestamps: false
        }
    }
}

module.exports = { LENGUAGE_TABLE, LenguageSchema, Lenguage }