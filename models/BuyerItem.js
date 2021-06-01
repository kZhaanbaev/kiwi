const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BuyerItem extends Model {}

BuyerItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'buyer',
        key: 'id',
        unique: false
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'item',
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
    modelName: 'buyeritem'
  }
);

module.exports = BuyerItem;
