const express = require("express");
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage: storage })
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
