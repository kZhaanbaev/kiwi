const router = require('express').Router();
const { BuyerItem, Buyer, Item } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const buyerItems = await BuyerItem.findAll({
            include: [{model: Item, through: BuyerItem, as: 'buyer_item'}]
        });
        return res.status(200).json({ buyerItems });
    } catch (err) {
        return res.status(500).send(err);
    }
});



module.exports = router;

/*
{
            attributes: {
                exclude: ['buyer_id', 'item_id']
            },
            include: [
                {
                    model: Buyer
                }
            ]
        }
*/