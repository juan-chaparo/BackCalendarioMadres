const { Model, DataTypes, Sequelize } = require('sequelize');

const  AGENTS_COMMUNITY_TABLE = 'av_agents_community';

const { DOCS_TYPES_TABLE } = require('./docTypesModel');
const { EDUCATION_LEVELS_TABLE } = require('./educationLevelsModel');

const agentsCommunitySchema = {
    
    idAgentCommunity: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_agent_community'
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name'
    },
    secondName: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'second_name'
    },
    firstLastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_last_name'
    },
    secondLastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'second_last_name'
    },
    cellphone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    numDoc: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'num_doc'
    },
    idDocType: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_doc_type',
        references: {
            model: DOCS_TYPES_TABLE,
            key: 'id_doc_type'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    dateAdmission: {
        allowNull: null,
        type: DataTypes.DATEONLY,
        field: 'date_admission',
        defaultValue: Sequelize.NOW
    },
    idEducationLevel: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_education_level',
        references: {
            model: EDUCATION_LEVELS_TABLE,
            key: 'id_education_level'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    dateBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'date_birth'
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    img: {
        allowNull: true,
        type: DataTypes.STRING(2500)
    }
};

class agentCommunity extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_docs_types,{
            foreignKey: 'idDocType',
            as: 'DocType'
        });

        this.belongsTo(models.am_education_levels,{
            foreignKey: 'idEducationLevel',
            as: 'educationLevel'
        });

        this.hasMany(models.av_agents_uds,{
            foreignKey: 'idAgentCommunity',
            as: 'agentCommunities'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: AGENTS_COMMUNITY_TABLE,
            modelName: 'av_agents_community',
            timestamps: false
        }
    }
}

module.exports = { AGENTS_COMMUNITY_TABLE, agentsCommunitySchema, agentCommunity }