const router = require('express').Router();
const { Department } = require('../../models');

router.get('/', async(req, res) => {
    try{
        const departments = await Department.findAll();
        return res.status(200).json({departments});
    }catch (err){
        return res.status(500).send(err);
    }
});



module.exports = router;