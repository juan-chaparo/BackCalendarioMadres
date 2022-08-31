const { Model, DataTypes } = require('sequelize');

const  ASPECTS_TABLE = 'am_aspects';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const aspectsSchema = {
    
    idAspect: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_aspect'
    },
    nameAspects: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_aspect'
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

class Aspects extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguages'
        });

        this.hasMany(models.av_tracing_child,{
            foreignKey: 'idAspect',
            as: 'tracingsAspects'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ASPECTS_TABLE,
            modelName: 'am_aspects',
            timestamps: false
        }
    }
}

module.exports = { ASPECTS_TABLE, aspectsSchema, Aspects }