const sequelize = require('../config/connection');
const seedBuyers = require('./buyerData');
const seedItems = require('./itemsData');
const seedDepartments = require('./departmentData');
const seedDepartmentItem = require('./departmentItemData');

const seedAll = async () => {
    await sequelize.sync({force: true});
    await seedBuyers();
    await seedDepartments();
    await seedItems();
    await seedDepartmentItem();
    process.exit(0);
}

seedAll();