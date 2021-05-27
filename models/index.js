const Buyer = require('./Buyer');
const Item = require('./Item');
const Department = require('./Department');
const DepartmentItem = require('./DepartmentItem');
const sequelize = require('../config/connection');
const { Sequelize } = require('sequelize/types');

Buyer.hasMany(Item, {
    foreignKey: 'buyer_id'
});

Item.belongsTo(Buyer, {
    foreignKey: 'buyer_id'
});

// Department.hasMany(Item, {
//     foreignKey: 'department_id'
// });

// Item.belongsTo(Buyer, {
//     foreignKey: 'buyer_id'
// });

Department.belongsToMany(Item, {
    through: DepartmentItem,
    // as: 'items',
    foreignKey: 'department_id'
});


Item.belongsToMany(Department, {
    through: DepartmentItem,
    // as: 'departments',
    foreignKey: 'item_id'
});

module.exports = {Buyer, Item, Department};