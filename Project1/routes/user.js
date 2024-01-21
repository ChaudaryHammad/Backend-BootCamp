const express = require('express')
const router = express.Router()
const {handleAllUsers,handleUserSingup,handleUserLogin} = require('../controllers/user')

router.get('/',handleAllUsers)
router.post('/',handleUserSingup)
router.post('/login',handleUserLogin)



module.exports = router