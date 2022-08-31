const { Model, DataTypes } = require('sequelize');

const { ROLE_TABLE } = require('./rolesModel');

const  USER_TABLE= 'av_users';

const userSchema = {
    idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_user'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    idRol: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_rol',
        references: {
            model: ROLE_TABLE,
            key: 'id_rol'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    recoveryToken: {
        allowNull:  true,
        type: DataTypes.STRING,
        field: 'recovery_token'
    }
}

class User extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_rol,{
            foreignKey: 'idRol',
            as: 'role'
        });

        this.hasOne(models.av_admins,{
            foreignKey: 'idUser',
            as: 'adminsUser'
        });

        this.hasOne(models.av_agents_uds,{
            foreignKey: 'idUser',
            as: 'agentsUdsUser'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'av_users',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, userSchema, User }