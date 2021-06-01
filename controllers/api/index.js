const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
const departmentRoutes = require('./departmentRoutes');
const buyerRoutes = require('./buyerRoutes');
const itemRoutes = require('./itemRoutes');
const buyerItemRoutes = require('./buyerItemRoutes');

// router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
router.use('/departments', departmentRoutes);
router.use('/buyers', buyerRoutes);
router.use('/items', itemRoutes);
router.use('/buyeritems', buyerItemRoutes);

module.exports = router;
