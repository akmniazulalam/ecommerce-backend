const express = require('express')
const router = express.Router()
const {categoryController, getAllCategory, updateCategoryController, deleteCategoryController, deleteAllCategoryController} = require('../../controllers/categoryController')
const {subCategoryController} = require('../../controllers/subCategoryController')


router.post("/createcategory", categoryController)
router.get("/getallcategory", getAllCategory)
router.post("/createsubcategory", subCategoryController)
router.patch("/updatecategory/:id", updateCategoryController)
router.delete("/deletecategory/:id", deleteCategoryController)
router.delete("/deleteallcategory", deleteAllCategoryController)

module.exports = router