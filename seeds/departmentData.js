const { Department } = require('../models');

const departmentData = [
    {
        name: 'Games'
    },
    {
        name: 'Music'
    },
    {
        name: 'Books'
    },
    {
        name: 'Toys'
    }
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;