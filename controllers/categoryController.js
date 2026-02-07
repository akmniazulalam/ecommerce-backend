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

async function updateCategoryController (req, res) {
  const {id} = req.params
  const {name, description} = req.body
  
  const updateCategory = await categorySchema.findById(id)

  updateCategory.name = name
  updateCategory.description = description

  await updateCategory.save()
  res.status(200).json({
    message: "Success",
    data: updateCategory
  })
}


async function deleteCategoryController (req, res) {
   const {id} = req.params
   const deleteCategory = await categorySchema.findByIdAndDelete(id)
   res.status(200).json({
    message: "Success",
    data: deleteCategory
   })
}

module.exports = {categoryController, getAllCategory, updateCategoryController, deleteCategoryController};
