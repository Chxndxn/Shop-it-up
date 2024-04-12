const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const productDetails = req.body;
    if (productDetails) {
      const product = await Product.create(productDetails);
      res.status(201).json(product);
    } else {
      res
        .status(400)
        .json({ error: "Please check the required product details." });
    }
  } catch (err) {
    console.error(`Error creating a new product: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let condition = {};
    if (!req.query.admin) {
      condition.isActive = true;
    }

    let query = Product.find(condition);
    let totalProductsQuery = Product.find(condition);

    // Filter by category
    const category = req.query.category;
    if (category) {
      query = query.find({ category: category.split(",") });
      totalProductsQuery = totalProductsQuery.find({
        category: category.split(","),
      });
    }

    // Filter by brand
    const brand = req.query.brand;
    if (brand) {
      query = query.find({ brand: brand.split(",") });
      totalProductsQuery = totalProductsQuery.find({ brand: brand.split(",") });
    }

    if (req.query._page && req.query._limit) {
      const pageSize = req.query._limit;
      const page = req.query._page;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    if (req.query._sort && req.query._order) {
      if (req.query._order === "desc") {
        query = query.sort({ [req.query._sort]: -1 });
      } else {
        query = query.sort({ [req.query._sort]: 1 });
      }
    }
    const productsList = await query.exec();
    const totalProducts = await totalProductsQuery.count().exec();
    if (productsList.length > 0) {
      res.set("X-Total-Count", totalProducts);
      res.status(200).json(productsList);
    } else {
      res.status(404).json({ error: "No products found" });
    }
  } catch (err) {
    console.error(`Error fetching list of products: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    if (productId) {
      const product = await Product.findById(productId);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "No product found" });
      }
    }
  } catch (err) {
    console.error(`Error fetching product by id: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDetails = req.body;
    if (productId) {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        productDetails,
        { new: true }
      );
      if (updatedProduct) {
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ error: "No product found" });
      }
    }
  } catch (err) {
    console.error(`Error updating the product: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (productId) {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (deletedProduct) {
        res.status(200).json(deletedProduct);
      } else {
        res.status(404).json({ error: "No product found" });
      }
    }
  } catch (err) {
    console.error(`Error deleting the product: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};
