const { Model, DataTypes } = require('sequelize');

const  MATERIALS_TABLE = 'am_materials';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const materialsSchema = {
    
    idMaterial: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_material'
    },
    material: {
        allowNull: false,
        type: DataTypes.STRING
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

class Materials extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_activities_materials,{
            foreignKey: 'idMaterial',
            as: 'activitiesMaterialsMaterials'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: MATERIALS_TABLE,
            modelName: 'am_materials',
            timestamps: false
        }
    }
}

module.exports = { MATERIALS_TABLE, materialsSchema, Materials }