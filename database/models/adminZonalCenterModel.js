const { Model, DataTypes, Sequelize } = require('sequelize');

const  ADMIN_ZONAL_CENTERS_TABLE = 'av_admin_zonal_centers';

const { ADMINS_TABLE } = require('./adminsModel');
const { ZONAL_CENTERS_TABLE } = require('./zonalCentersModel');

const adminZonalCentersSchema = {
    
    idAdminZonalCenter: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_admin_zonal_center'
    },
    idAdmin: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_admin',
        references: {
            model: ADMINS_TABLE,
            key: 'id_admin'
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
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    }
};

class AdminZonalCenters extends Model {
    static associate(models)
    {
        this.belongsTo(models.av_admins,{
            foreignKey: 'idAdmin',
            as: 'admin'
        });

        this.belongsTo(models.av_zonal_centers,{
            foreignKey: 'idZonalCenter',
            as: 'zonalCenter'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ADMIN_ZONAL_CENTERS_TABLE,
            modelName: 'av_admin_zonal_centers',
            timestamps: false
        }
    }
}

module.exports = { ADMIN_ZONAL_CENTERS_TABLE, adminZonalCentersSchema, AdminZonalCenters }