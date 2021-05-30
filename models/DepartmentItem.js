const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DepartmentItem extends Model{ }

DepartmentItem.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true  
        },
        item_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'item',
                key: 'id',
                unique: false
            }
        },
        department_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'department',
                key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'department_item'
    }
);

module.exports = DepartmentItem;