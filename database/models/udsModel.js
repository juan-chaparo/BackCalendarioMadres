const { Model, DataTypes, Sequelize } = require('sequelize');

const  UDS_TABLE = 'av_uds';

const { MUNICIPALITIES_TABLE } = require('./municipalitiesModel');
const { SERVICES_TYPES_TABLE } = require('./servicesTypesModel');
const { SERVICE_MODALITIES_TABLE } = require('./servicesModalityModel');
const { ZONAL_CENTERS_TABLE } = require('./zonalCentersModel');

const udsSchema = {
    
    idUds: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_uds'
    },
    nameUds: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_uds'
    },
    nit: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'NIT'
    },
    numberContract: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'number_contract'
    },
    code: {
        allowNull: false,
        type: DataTypes.STRING
    },
    cellphone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING
    },
    idMunicipality: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_municipality',
        references: {
            model: MUNICIPALITIES_TABLE,
            key: 'id_municipality'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idServiceType: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_service_type',
        references: {
            model: SERVICES_TYPES_TABLE,
            key: 'id_service_type'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idServiceModality: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_service_modality',
        references: {
            model: SERVICE_MODALITIES_TABLE,
            key: 'id_service_modality'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idZonalCenter: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_zonal_center',
        references: {
            model: ZONAL_CENTERS_TABLE,
            key: 'id_zonal_center'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class Uds extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_municipalities,{
            foreignKey: 'idMunicipality',
            as: 'municipality'
        });

        this.belongsTo(models.am_services_types,{
            foreignKey: 'idServiceType',
            as: 'ServiceType'
        });
        
        this.belongsTo(models.am_services_modalities,{
            foreignKey: 'idServiceModality',
            as: 'serviceModality'
        });

        this.belongsTo(models.av_zonal_centers,{
            foreignKey: 'idZonalCenter',
            as: 'zonalCenter'
        });

        this.hasMany(models.av_agents_uds,{
            foreignKey: 'idUds',
            as: 'AgentsUdsUds'
        });

        this.hasMany(models.av_childs,{
            foreignKey: 'idUds',
            as: 'childsUdss'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: UDS_TABLE,
            modelName: 'av_uds',
            timestamps: false
        }
    }
}

module.exports = { UDS_TABLE, udsSchema, Uds }