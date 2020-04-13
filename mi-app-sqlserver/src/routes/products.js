const {Router}= require('express')
const  {getProducts, addProducts, updateProducts, deleteProducts}  = require('../controllers/productController')
const router =Router()

router.get('/products', getProducts);
router.post('/products', addProducts)
router.patch('/products/:id', updateProducts)
router.delete('/products/:id', deleteProducts)

module.exports = router
