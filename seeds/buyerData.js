const { Buyer } = require('../models');

const buyerData = [
  {
    username: 'tRing',
    email: 'tRing@test.com',
    password: 'tRing',
    firstName: 'Tonya',
    lastName: 'Ringsell'
  },
  {
    username: 'aRoz',
    email: 'aRoz@test.com',
    password: 'aRoz',
    firstName: 'Art',
    lastName: 'Roz'
  },
  {
    username: 'gCross',
    email: 'gCross@test.com',
    password: 'gCross',
    firstName: 'Gussi',
    lastName: 'Crossman'
  },
  {
    username: 'oLefe',
    email: 'oLefe@test.com',
    password: 'oLefe',
    firstName: 'Osbourne',
    lastName: 'Lefever'
  },
  {
    username: 'rJarr',
    email: 'rJarr@test.com',
    password: 'rJarr',
    firstName: 'Ruttger',
    lastName: 'Jarrelt'
  },
  {
    username: 'yMol',
    email: 'yMol@test.com',
    password: 'yMol',
    firstName: 'Yoshi',
    lastName: 'Mollon'
  },
  {
    username: 'rWell',
    email: 'rWell@test.com',
    password: 'rWell',
    firstName: 'Raquela',
    lastName: 'Wellen'
  },
  {
    username: 'jGold',
    email: 'jGold@test.com',
    password: 'jGold',
    firstName: 'Julius',
    lastName: 'Goldsack'
  },
  {
    username: 'aYven',
    email: 'aYven@test.com',
    password: 'aYven',
    firstName: 'Aloysia',
    lastName: 'Yven'
  },
  {
    username: 'eGarb',
    email: 'eGarb@test.com',
    password: 'eGarb',
    firstName: 'Erin',
    lastName: 'Garbott'
  },
];

const seedBuyers = () => Buyer.bulkCreate(buyerData);

module.exports = seedBuyers;