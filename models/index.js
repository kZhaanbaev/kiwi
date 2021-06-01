const Buyer = require('./Buyer');
const Item = require('./Item');
const Department = require('./Department');
const DepartmentItem = require('./DepartmentItem');
const sequelize = require('../config/connection');

Buyer.hasMany(Item, {
    foreignKey: 'buyer_id'
});

Item.belongsTo(Buyer, {
    foreignKey: 'buyer_id'
});

Item.belongsToMany(Department, {
    through: DepartmentItem,
    as: 'departments',
    foreignKey: 'id'
});

Department.belongsToMany(Item, {
    through: DepartmentItem,
    as: 'items',
    foreignKey: 'id'
});



module.exports = {Buyer, Item, Department, DepartmentItem};