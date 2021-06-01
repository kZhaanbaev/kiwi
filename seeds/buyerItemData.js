const { BuyerItem } = require('../models');

const buyerItemData = [
  {
    buyer_id: 4,
    item_id: 1
  },
  {
    buyer_id: 4,
    item_id: 2
  },
  {
    buyer_id: 1,
    item_id: 1
  },
  {
    buyer_id: 1,
    item_id: 4
  },
  {
    buyer_id: 2,
    item_id: 5
  },
  {
    buyer_id: 2,
    item_id: 6
  },
  {
    buyer_id: 3,
    item_id: 7
  }
];

const seedBuyerItem = () => BuyerItem.bulkCreate(buyerItemData);

module.exports = seedBuyerItem;