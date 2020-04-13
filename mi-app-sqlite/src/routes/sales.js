const {Router}= require('express')
const  {getSales, addSales, updateSales, deleteSales}  = require('../controllers/saleController')
const router =Router()

router.get('/sales', getSales);
router.post('/sales', addSales)
router.patch('/sales/:id', updateSales)
router.delete('/sales/:id', deleteSales)

module.exports = router
