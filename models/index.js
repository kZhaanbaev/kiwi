const Buyer = require('./Buyer');
const Item = require('./Item');
const Department = require('./Department');

Buyer.hasMany(Item, {
    foreignKey: 'buyer_id'
});

Item.belongsTo(Buyer, {
    foreignKey: 'buyer_id'
});

Department.hasMany(Item, {
    foreignKey: 'department_id'
});

Item.belongsTo(Department, {
    foreignKey: 'department_id'
});

module.exports = {Buyer, Item, Department};