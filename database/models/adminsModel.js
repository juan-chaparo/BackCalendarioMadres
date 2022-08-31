const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./userModel');
const { DOCS_TYPES_TABLE } = require('./docTypesModel');

const  ADMINS_TABLE = 'av_admins';

const adminsSchema = {
    
    idAdmin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_admin'
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
    cellphone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    dateBirth: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'date_birth'
    },
    dateAdmission: {
        allowNull: null,
        type: DataTypes.DATEONLY,
        field: 'date_admission',
        defaultValue: Sequelize.NOW
    },
    idUser: {
        allowNull: null,
        type: DataTypes.INTEGER,
        field: 'id_user',
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id_user'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Admins extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_users,{
            foreignKey: 'idUser',
            as: 'user'
        });

        this.belongsTo(models.am_docs_types,{
            foreignKey: 'idDocType',
            as: 'DocType'
        });

        this.hasMany(models.av_admin_zonal_centers,{
            foreignKey: 'idAdmin',
            as: 'admins'
        });        
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ADMINS_TABLE,
            modelName: 'av_admins',
            timestamps: false
        }
    }
}

module.exports = { ADMINS_TABLE, adminsSchema, Admins }