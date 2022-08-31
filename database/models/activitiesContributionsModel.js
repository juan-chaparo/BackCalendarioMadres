const { Model, DataTypes } = require('sequelize');

const  ACTIVITIES_CONTRIBUTIONS_TABLE = 'av_activities_contributions';

const { ACTIVITIES_TABLE } = require('./activitiesModel');
const { CONTRIBUTION_TABLE } = require('./contributionModel');


const activitiesContributionsSchema = {
    
    idActivityContribution: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_activity_contribution'
    },
    idActivity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_activity',
        references: {
            model: ACTIVITIES_TABLE,
            key: 'id_activity'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idContribution: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_contribution',
        references: {
            model: CONTRIBUTION_TABLE,
            key: 'id_contribution'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class ActivitiesContributions extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_activities,{
            foreignKey: 'idActivity',
            as: 'activity'
        });

        this.belongsTo(models.av_contribution,{
            foreignKey: 'idContribution',
            as: 'contribution'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ACTIVITIES_CONTRIBUTIONS_TABLE,
            modelName: 'av_activities_contributions',
            timestamps: false
        }
    }
}

module.exports = { ACTIVITIES_CONTRIBUTIONS_TABLE, activitiesContributionsSchema, ActivitiesContributions }