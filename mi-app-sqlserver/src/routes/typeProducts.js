const {Router}= require('express')
const  {getTypeProducts, addTypeProducts, updateTypeProducts, deleteTypeProducts}  = require('../controllers/typeProductController')
const router =Router()

router.get('/type_products', getTypeProducts);
router.post('/type_products', addTypeProducts);
router.patch('/type_products/:id', updateTypeProducts);
router.delete('/type_products/:id', deleteTypeProducts);


module.exports = router
