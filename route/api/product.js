const express = require('express')
const router = express.Router()
const productController = require('../../controllers/productController')



router.post("/createproduct", productController)

module.exports = router