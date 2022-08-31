const { Model, DataTypes } = require('sequelize');

const  SERVICE_MODALITIES_TABLE = 'am_services_modalities';

const { LENGUAGE_TABLE } = require('./lenguageModel');

const serviceModalitiesSchema = {
    
    idServiceModality: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_service_modality'
    },
    nameServiceModality: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_service_modality'
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

class ServicesModalities extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_lenguage,{
            foreignKey: 'idLenguage',
            as: 'lenguage'
        });

        this.hasMany(models.av_uds,{
            foreignKey: 'idServiceModality',
            as: 'udsServiceModalities'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: SERVICE_MODALITIES_TABLE,
            modelName: 'am_services_modalities',
            timestamps: false
        }
    }
}

module.exports = { SERVICE_MODALITIES_TABLE, serviceModalitiesSchema, ServicesModalities }