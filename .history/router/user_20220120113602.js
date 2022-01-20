const express = require('express')
const router = express.Router()
const userHandler = require('../router_handle/user')

router.post('/reguser',userHandler.regUser)
router.post('/login',userHandler.login)

module.exports = router