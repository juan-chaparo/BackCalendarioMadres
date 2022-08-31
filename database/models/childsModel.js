const { Model, DataTypes, Sequelize } = require('sequelize');

const  CHILDS_TABLE = 'av_childs';

const { DOCS_TYPES_TABLE } = require('./docTypesModel');
const { UDS_TABLE } = require('./udsModel');
const { POPULATION_TYPES_TABLE } = require('./populationTypesModel');
const { GENDER_TABLE } = require('./genderModel');

const childsSchema = {
    
    idChild: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_child'
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
    dateBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'date_birth'
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
    idUds: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_uds',
        references: {
            model: UDS_TABLE,
            key: 'id_uds'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idPopulationType: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_population_type',
        references: {
            model: POPULATION_TYPES_TABLE,
            key: 'id_population_type'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    idGender: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_gender',
        references: {
            model: GENDER_TABLE,
            key: 'id_gender'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    img: {
        allowNull: true,
        type: DataTypes.STRING(2500)
    }
};

class Childs extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_docs_types,{
            foreignKey: 'idDocType',
            as: 'docType'
        });

        this.belongsTo(models.av_uds,{
            foreignKey: 'idUds',
            as: 'uds'
        });

        this.belongsTo(models.am_population_types,{
            foreignKey: 'idPopulationType',
            as: 'typePopulation'
        });

        this.belongsTo(models.am_genders,{
            foreignKey: 'idGender',
            as: 'gender'
        });
        
        this.hasMany(models.av_childs_attendants,{
            foreignKey: 'idChild',
            as: 'childsAttendantsChilds'
        });

        this.hasMany(models.av_child_uds,{
            foreignKey: 'idChild',
            as: 'childsUdsChilds'
        });

        this.hasMany(models.av_withdrawal,{
            foreignKey: 'idChild',
            as: 'withdrawalChilds'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: CHILDS_TABLE,
            modelName: 'av_childs',
            timestamps: false
        }
    }
}

module.exports = { CHILDS_TABLE, childsSchema, Childs }