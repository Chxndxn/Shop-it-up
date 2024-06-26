const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const brandController = require("../controllers/brandController");
const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");
const cartController = require("../controllers/cartController");
const authController = require("../controllers/authController");

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

// Category
router.post("/category", categoryController.createCategory);
router.get("/category", categoryController.getAllCategories);
router.put("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.deleteCategory);

// User
router.post("/user", userController.createUser);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

// Order
router.post("/order", orderController.createOrder);
router.get("/order", orderController.getAllOrders);
router.get("/order/:id", orderController.getOrdersByUser);
router.put("/order/:id", orderController.updateOrder);
router.delete("/order/:id", orderController.deleteOrder);

// Cart
router.post("/cart", cartController.addToCart);
router.get("/cart", cartController.getCartByUser);
router.put("/cart/:id", cartController.updateCart);
router.delete("/cart/:id", cartController.deleteFromCart);

// Auth
router.post("/auth", authController.loginUser);

module.exports = router;
