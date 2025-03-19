const express = require('express')
const router = express.Router()
const user = require('./user')
const task = require('./task')
const authentication = require('../middleware/auth')



router.use('/user', user)
router.use('/task', authentication, task)

module.exports = router