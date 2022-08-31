const { Model, DataTypes } = require('sequelize');

const  SERVICES_TYPES_TABLE = 'am_services_types';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const servicesTypesSchema = {
    
    idServiceType: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_service_type'
    },
    nameServiceType: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_service_type'
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

class ServicesTypes extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_uds,{
            foreignKey: 'idServiceType',
            as: 'udsServiceTypes'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: SERVICES_TYPES_TABLE,
            modelName: 'am_services_types',
            timestamps: false
        }
    }
}

module.exports = { SERVICES_TYPES_TABLE, servicesTypesSchema, ServicesTypes }