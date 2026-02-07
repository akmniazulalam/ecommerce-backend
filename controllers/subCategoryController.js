const subCategorySchema = require("../model/subCategorySchema");

function subCategoryController(req, res) {
  const { name, description } = req.body;
  try {
    const createSubCategory = new subCategorySchema({
    name,
    description,
    categoryId
  });
  createSubCategory.save();

  res.status(200).json({ message: "Subcategory Added Successfully" });
  } catch (error) {
    return res.json({message: error})
  }
}

async function getAllCategory (req, res) {
    const getCategoryList = await subCategorySchema.find({})
    res.json({message: "Category Paichi", data: getCategoryList})
}

module.exports = {subCategoryController, getAllCategory};
