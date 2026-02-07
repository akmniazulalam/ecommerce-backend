const productSchema = require("../model/productSchema");

async function productController(req, res) {
  const { name, description, category, price, size, color, ram, storage } = req.body;
  const createProduct = new productSchema({
    name,
    description,
    category,
    price,
    size,
    color,
    ram,
    storage,
  });
  await createProduct.save();
  res.json({
    message: "Product Added Successfully",
    data: createProduct,
  });
}

module.exports = productController;
