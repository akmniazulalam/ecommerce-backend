const express = require('express')
const router = express.Router()
const authRoute = require('./auth')
const shopRoute = require('./shop')

router.use("/", authRoute)
router.use("/", shopRoute)

module.exports = router