const {Router}= require('express')
const  {getUsers, addUsers, updateUsers,deleteUsers}  = require('../controllers/userController')
const router =Router()

router.get('/users', getUsers);
router.post('/users', addUsers)
router.patch('/users/:id', updateUsers)
router.delete('/users/:id', deleteUsers)

module.exports = router
