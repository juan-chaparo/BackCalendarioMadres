const { Model, DataTypes } = require('sequelize');

const  CONTRIBUTION_TABLE = 'av_contribution';

const { LENGUAGE_TABLE } = require('./lenguageModel');
const { TYPES_CONTRIBUTIONS_TABLE } = require('./typesContributionsModel');


const contributionSchema = {
    
    idContribution: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_contribution'
    },
    contribution: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    idTypeContribution: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_type_contribution',
        references: {
            model: TYPES_CONTRIBUTIONS_TABLE,
            key: 'id_type_contribution'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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

class Contribution extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.belongsTo(models.am_types_contributions,{
            foreignKey: 'idTypeContribution',
            as: 'typeContribution'
        });

        this.hasMany(models.av_activities_contributions,{
            foreignKey: 'idContribution',
            as: 'activitiesContributionscontributions'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: CONTRIBUTION_TABLE,
            modelName: 'av_contribution',
            timestamps: false
        }
    }
}

module.exports = { CONTRIBUTION_TABLE, contributionSchema, Contribution }