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

module.exports = categoryController;
