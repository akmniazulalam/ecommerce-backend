const express = require('express')
const router = express.Router()
const authRoute = require('./auth')
const categoryRoute = require('./category')
const shopRoute = require('./shop')

router.use("/auth", authRoute)
router.use("/category", categoryRoute)
router.use("/shop", shopRoute)

module.exports = router