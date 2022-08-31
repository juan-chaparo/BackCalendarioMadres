const { Model, DataTypes } = require('sequelize');

const  GENDER_TABLE= 'am_genders';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const gendersSchema = {
    
    idGender: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_gender'
    },
    nameGender: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_gender'
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

class Genders extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_attendants,{
            foreignKey: 'idGender',
            as: 'attendantsGenders'
        });

        this.hasMany(models.av_childs,{
            foreignKey: 'idGender',
            as: 'childsGenders'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: GENDER_TABLE,
            modelName: 'am_genders',
            timestamps: false
        }
    }
}

module.exports = { GENDER_TABLE, gendersSchema, Genders }