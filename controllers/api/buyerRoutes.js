const router = require('express').Router();
const { Buyer, Item, BuyerItem } = require('../../models');

router.get('/', async(req, res) => {
    try{
        const buyers = await Buyer.findAll();
        return res.status(200).json({buyers});
    }catch (err){
        return res.status(500).send(err);
    }
});



module.exports = router;

