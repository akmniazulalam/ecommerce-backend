const express = require("express");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const {
  productController,
  updateProductController,
  getProductController,
  deleteProduct,
  deleteAllProduct,
} = require("../../controllers/productController");

router.post("/createproduct", upload.single('image'), productController);
router.get("/getproduct", getProductController);
router.patch("/updateproduct/:id", updateProductController);
router.delete("/deleteproduct/:id", deleteProduct);
router.delete("/deleteallproduct", deleteAllProduct);

module.exports = router;
