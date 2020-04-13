const {Router}= require('express')
const  {getSaleProducts, addSaleProducts, updateSaleProducts, deleteSaleProducts} = require('../controllers/saleProductController')
const router =Router()

router.get('/saleProducts', getSaleProducts);
router.post('/saleProducts', addSaleProducts);
router.patch('/saleProducts/:id', updateSaleProducts);
router.delete('/saleProducts/:id', deleteSaleProducts);

module.exports = router
