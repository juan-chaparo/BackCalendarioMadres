const { Model, DataTypes } = require('sequelize');

const  RELATIONSHIPS_TABLE = 'am_relationships';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const relationshipsSchema = {
    
    idRelationship: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_relationship'
    },
    nameRelationship: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_relationship'
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

class Relationships extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });
        
        this.hasMany(models.av_childs_attendants,{
            foreignKey: 'idRelationship',
            as: 'childsAttendantsRelationships'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: RELATIONSHIPS_TABLE,
            modelName: 'am_relationships',
            timestamps: false
        }
    }
}

module.exports = { RELATIONSHIPS_TABLE, relationshipsSchema, Relationships }