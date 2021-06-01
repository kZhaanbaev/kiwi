const { DepartmentItem } = require('../models');

const departmentItemData = [
    {
        item_id: 1,
        department_id: 4
    },
    {
        item_id: 2,
        department_id: 4
    },
    {
        item_id: 3,
        department_id: 1
    },
    {
        item_id: 4,
        department_id: 1
    },
    {
        item_id: 5,
        department_id: 2
    },
    {
        item_id: 6,
        department_id: 2
    },
    {
        item_id: 7,
        department_id: 3
    }
];

const seedDepartmentItem = () => DepartmentItem.bulkCreate(departmentItemData);

module.exports = seedDepartmentItem;