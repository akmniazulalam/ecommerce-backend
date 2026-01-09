const express = require('express')
const router = express.Router()
const authRoute = require('./auth')
const shopRoute = require('./shop')

router.use("/auth", authRoute)
router.use("/shop", shopRoute)

module.exports = router