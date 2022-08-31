const { Model, DataTypes } = require('sequelize');

const  MUNICIPALITIES_TABLE = 'am_municipalities';

const { DEPARTMENTS_TABLE } = require('./departmentsModel');

const municipalitiesSchema = {
    
    idMunicipality: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_municipality'
    },
    nameMunicipality: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_municipality'
    },
    idDepartment: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_department',
        references: {
            model: DEPARTMENTS_TABLE,
            key: 'id_department'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Municipalities extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_departments,{
            foreignKey: 'idDepartment',
            as: 'department'
        });

        this.hasMany(models.av_uds,{
            foreignKey: 'idMunicipality',
            as: 'udsMunicipalities'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: MUNICIPALITIES_TABLE,
            modelName: 'am_municipalities',
            timestamps: false
        }
    }
}

module.exports = { MUNICIPALITIES_TABLE, municipalitiesSchema, Municipalities }