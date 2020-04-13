const {Router}= require('express')
const  {getClients, addClients, updateClients, deleteClients}  = require('../controllers/clientController')
const router =Router()

router.get('/clients', getClients);
router.post('/clients', addClients)
router.patch('/clients/:id', updateClients)
router.delete('/clients/:id', deleteClients)

module.exports = router
