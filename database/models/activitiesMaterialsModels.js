const { Model, DataTypes } = require('sequelize');

const  ACTIVITIES_MATERIALS_TABLE = 'av_activities_materials';

const { ACTIVITIES_TABLE } = require('./activitiesModel');
const { MATERIALS_TABLE } = require('./materialsModel');

const activitiesMaterialsSchema = {
    
    idActivitiesMaterials: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_activities_materials'
    },
    idMaterial: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_material',
        references: {
            model: MATERIALS_TABLE,
            key: 'id_material'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    }
};

class ActivitiesMaterials extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_activities,{
            foreignKey: 'idActivity',
            as: 'activity'
        });

        this.belongsTo(models.am_materials,{
            foreignKey: 'idMaterial',
            as: 'material'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ACTIVITIES_MATERIALS_TABLE,
            modelName: 'av_activities_materials',
            timestamps: false
        }
    }
}

module.exports = { ACTIVITIES_MATERIALS_TABLE, activitiesMaterialsSchema, ActivitiesMaterials }