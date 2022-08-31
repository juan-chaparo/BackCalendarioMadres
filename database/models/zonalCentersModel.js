const { Model, DataTypes } = require('sequelize');

const  ZONAL_CENTERS_TABLE = 'av_zonal_centers';

const zonalCenterschema = {
    
    idZonalCenter: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_zonal_center'
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    state: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
};

class ZonalCenters extends Model {
    static associate(models)
    {
        this.hasMany(models.av_admin_zonal_centers,{
            foreignKey: 'idZonalCenter',
            as: 'adminZonalCentersZonalCenters'
        });

        this.hasMany(models.av_uds,{
            foreignKey: 'idZonalCenter',
            as: 'udsZonalCenters'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: ZONAL_CENTERS_TABLE,
            modelName: 'av_zonal_centers',
            timestamps: false
        }
    }
}

module.exports = { ZONAL_CENTERS_TABLE, zonalCenterschema, ZonalCenters }