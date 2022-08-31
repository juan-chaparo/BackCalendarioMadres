const { Model, DataTypes, Sequelize } = require('sequelize');

const  ATTENDANTS_TABLE = 'av_attendants';

const { GENDER_TABLE } = require('./genderModel');
const { DOCS_TYPES_TABLE } = require('./docTypesModel');
const { EDUCATION_LEVELS_TABLE } = require('./educationLevelsModel');
 
const attendantsSchema = {
    
    idAttendant: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_attendant'
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
    occupation: {
        allowNull: true,
        type: DataTypes.STRING
    },
    dateBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'date_birth'
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
    dateStart: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'date_start'
    },
    dateEnd: {
        allowNull: false,
        type: DataTypes.TIME,
        field: 'date_end'
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    cellphone: {
        allowNull: false,
        type: DataTypes.STRING(20)
    },
    liveChild: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'live_child'
    },
    occasionally: {
        allowNull: false,
        type: DataTypes.BOOLEAN
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
    dateAdmission: {
        allowNull: null,
        type: DataTypes.DATEONLY,
        field: 'date_admission',
        defaultValue: Sequelize.NOW
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

class Attendants extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_genders,{
            foreignKey: 'idGender',
            as: 'gender'
        });

        this.belongsTo(models.am_docs_types,{
            foreignKey: 'idDocType',
            as: 'docType'
        });

        this.belongsTo(models.am_education_levels,{
            foreignKey: 'idEducationLevel',
            as: 'educationLevel'
        });

        this.hasMany(models.av_childs_attendants,{
            foreignKey: 'idAttendant',
            as: 'childsAttendants'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ATTENDANTS_TABLE,
            modelName: 'av_attendants',
            timestamps: false
        }
    }
}

module.exports = { ATTENDANTS_TABLE, attendantsSchema, Attendants }