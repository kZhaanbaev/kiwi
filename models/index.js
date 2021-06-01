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
    through: {
        model: BuyerItem,
        unique: false
    },
    as: 'item_buyer',
    foreignKey: 'buyer_id'
});

Buyer.belongsToMany(Item, {
    through: {
        model: BuyerItem,
        unique: false
    },
    as: 'buyer_item',
    foreignKey: 'buyer_id'
});


module.exports = { Buyer, Item, Department, BuyerItem };