const router = require('express').Router();
const { Item, Department } = require('../../models');

router.get('/', async(req, res) => {
    try{
        const items = await Item.findAll({
            attributes: {
                exclude: ['department_id']
            },
            include: [{
                model: Department
            }]
        });
        return res.status(200).json({items});
    }catch (err){
        return res.status(500).send(err);
    }
});



module.exports = router;