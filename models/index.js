const Buyer = require('./Buyer');
const Item = require('./Item');
const Department = require('./Department');
const BuyerItem = require('./BuyerItem');

Department.hasMany(Item, {
  foreignKey: 'department_id'
});

Item.belongsTo(Department, {
  foreignKey: 'department_id'
});

Item.belongsToMany(Buyer, {
  through: BuyerItem,
  as: 'buyer_item',
  foreignKey: 'id'
});

Buyer.belongsToMany(Item, {
  through: BuyerItem,
  as: 'buyer_item',
  foreignKey: 'id'
});



module.exports = {Buyer, Item, Department, BuyerItem};