const sequelize = require('../config/connection');
const seedBuyers = require('./buyerData');
const seedItems = require('./itemsData');
const seedDepartments = require('./departmentData');
const seedBuyerItem = require('./buyerItemData');

const seedAll = async () => {
    await sequelize.sync({force: true});
    await seedDepartments();
    await seedBuyers();
    await seedItems();
    await seedBuyerItem();
    process.exit(0);
}

seedAll();