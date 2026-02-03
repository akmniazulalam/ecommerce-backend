const express = require('express')
const router = express.Router()
const {categoryController, getAllCategory} = require('../../controllers/categoryController')


router.post("/allcategory", categoryController)
router.post("/getallcategory", getAllCategory)

module.exports = router