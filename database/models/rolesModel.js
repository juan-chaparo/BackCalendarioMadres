const { Model, DataTypes } = require('sequelize');

const { LENGUAGE_TABLE } = require('./lenguageModel');

const  ROLE_TABLE = 'am_rol';

const roleSchema = {
    
    idRol: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_rol'
    },
    rol: {
        allowNull: false,
        type: DataTypes.STRING
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

class Roles extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_users,{
            foreignKey: 'idRol',
            as: 'usersRoles'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'am_rol',
            timestamps: false
        }
    }
}

module.exports = { ROLE_TABLE, roleSchema, Roles }