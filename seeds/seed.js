const sequelize = require('../config/connection');
const seedBuyers = require('./buyerData');
const seedItems = require('./itemsData');
const seedDepartments = require('./departmentData');

const seedAll = async () => {
    await sequelize.sync({force: true});
    await seedBuyers();
    await seedItems();
    await seedDepartments();
    process.exit(0);
}

seedAll();