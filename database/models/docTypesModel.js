const { Model, DataTypes } = require('sequelize');

const  DOCS_TYPES_TABLE = 'am_docs_types';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const docTypesSchema = {
    
    idDocType: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_doc_type'
    },
    nameDoc: {
        allowNull: false,
        type: DataTypes.STRING(100),
        field: 'name_doc'
    },
    abbreviation: {
        allowNull: false,
        type: DataTypes.STRING(5)
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

class DocsTypes extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_admins,{
            foreignKey: 'idDocType',
            as: 'adminsDocTypes'
        });

        this.hasMany(models.av_agents_community,{
            foreignKey: 'idDocType',
            as: 'agentsCommunityDocTypes'
        });

        this.hasMany(models.av_attendants,{
            foreignKey: 'idDocType',
            as: 'attendantsDocTypes'
        });

        this.hasMany(models.av_childs,{
            foreignKey: 'idDocType',
            as: 'childsDocTypes'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: DOCS_TYPES_TABLE,
            modelName: 'am_docs_types',
            timestamps: false
        }
    }
}

module.exports = { DOCS_TYPES_TABLE, docTypesSchema, DocsTypes }