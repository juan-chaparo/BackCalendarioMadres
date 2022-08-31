const { Model, DataTypes } = require('sequelize');

const  TYPES_CONTRIBUTIONS_TABLE = 'am_types_contributions';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const typesContributionsSchema = {
    
    idTypeContribution: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_type_contribution'
    },
    TypeContribution: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'type_contribution'
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

class TypesContributions extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_contribution,{
            foreignKey: 'idTypeContribution',
            as: 'contributionsTypeContributions'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: TYPES_CONTRIBUTIONS_TABLE,
            modelName: 'am_types_contributions',
            timestamps: false
        }
    }
}

module.exports = { TYPES_CONTRIBUTIONS_TABLE, typesContributionsSchema, TypesContributions }