const express = require("express");
const router = express.Router();
const {
  productController,
  updateProductController,
  getProductController,
  deleteProduct,
  deleteAllProduct,
} = require("../../controllers/productController");

router.post("/createproduct", productController);
router.get("/getproduct", getProductController);
router.patch("/updateproduct/:id", updateProductController);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteallproduct", deleteAllProduct);

module.exports = router;
