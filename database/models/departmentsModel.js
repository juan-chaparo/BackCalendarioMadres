const { Model, DataTypes } = require('sequelize');

const  DEPARTMENTS_TABLE = 'am_departments';

const departmentsSchema = {
    
    idDepartment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_department'
    },
    nameDepartment: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_department'
    }
};

class Departments extends Model {
    static associate(models)
    {
        this.hasMany(models.am_municipalities,{
            foreignKey: 'idDepartment',
            as: 'municipalitiesDepartments'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: DEPARTMENTS_TABLE,
            modelName: 'am_departments',
            timestamps: false
        }
    }
}

module.exports = { DEPARTMENTS_TABLE, departmentsSchema, Departments }