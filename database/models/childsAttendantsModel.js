const { Model, DataTypes, Sequelize } = require('sequelize');

const  CHILDS_ATTENDANTS_TABLE = 'av_childs_attendants';

const { RELATIONSHIPS_TABLE } = require('./relationshipsModel');
const { ATTENDANTS_TABLE } = require('./attendantsModel');
const { CHILDS_TABLE } = require('./childsModel');

const childsAttendantsSchema = {
    
    idChildAttendant: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_child_attendant'
    },
    idChild: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_child',
        references: {
            model: CHILDS_TABLE,
            key: 'id_child'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idAttendant: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_attendant',
        references: {
            model: ATTENDANTS_TABLE,
            key: 'id_attendant'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    dateAdmission: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        field: 'date_admission'
    },
    idRelationship: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_relationship',
        references: {
            model: RELATIONSHIPS_TABLE,
            key: 'id_relationship'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class ChildsAttendants extends Model {
    static associate(models)
    {
        this.belongsTo(models.am_relationships,{
            foreignKey: 'idRelationship',
            as: 'relationship'
        });

        this.belongsTo(models.av_attendants,{
            foreignKey: 'idAttendant',
            as: 'attendant'
        });

        this.belongsTo(models.av_childs,{
            foreignKey: 'idChild',
            as: 'child'
        });
    }

    static config(sequelize)
    {
        return {
            sequelize,
            tableName: CHILDS_ATTENDANTS_TABLE,
            modelName: 'av_childs_attendants',
            timestamps: false
        }
    }
}

module.exports = { CHILDS_ATTENDANTS_TABLE, childsAttendantsSchema, ChildsAttendants }