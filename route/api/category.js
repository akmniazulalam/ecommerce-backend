const express = require('express')
const router = express.Router()
const categoryController = require('../../controllers/categoryController')


router.post("/allcategory", categoryController)

module.exports = router