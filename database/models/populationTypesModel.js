const { Model, DataTypes } = require('sequelize');

const  POPULATION_TYPES_TABLE = 'am_population_types';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const populationTypesSchema = {
    
    idPopulationType: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_population_type'
    },
    NamePopulationType: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_population_type'
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

class PopulationTypes extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });
        
        this.hasMany(models.av_childs,{
            foreignKey: 'idPopulationType',
            as: 'childsPopulationTypes'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: POPULATION_TYPES_TABLE,
            modelName: 'am_population_types',
            timestamps: false
        }
    }
}

module.exports = { POPULATION_TYPES_TABLE, populationTypesSchema, PopulationTypes }