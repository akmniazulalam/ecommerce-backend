const categorySchema = require("../model/categorySchema");

function categoryController(req, res) {
  const { name, description } = req.body;
  try {
    const createCategory = new categorySchema({
    name,
    description,
  });
  createCategory.save();

  res.status(200).json({ message: "Category Added Successfully" });
  } catch (error) {
    return res.json({message: error})
  }
}

async function getAllCategory (req, res) {
    const getCategoryList = await categorySchema.find({})
    res.json({message: "Category Paichi", data: getCategoryList})
}

module.exports = {categoryController, getAllCategory};
