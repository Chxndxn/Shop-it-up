const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const brandController = require("../controllers/brandController");

// Product
router.post("/product", productController.createProduct);
router.get("/product", productController.getAllProducts);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

// Brand
router.post("/brand", brandController.createBrand);
router.get("/brand", brandController.getAllBrands);
router.put("/brand/:id", brandController.updateBrand);
router.delete("/brand/:id", brandController.deleteBrand);

module.exports = router;
