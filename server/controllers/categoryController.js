const Category = require("../models/category");

exports.getAllCategories = async (req, res) => {
  try {
    const categoriesList = await Category.find({});
    if (categoriesList.length > 0) {
      res.status(200).json(categoriesList);
    } else {
      res.status(404).json({ error: "No categories found" });
    }
  } catch (err) {
    console.error(`Error fetching the list of categories: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const categoryDetails = req.body;
    if (categoryDetails) {
      const category = await Category.create(categoryDetails);
      res.status(201).json(category);
    }
  } catch (err) {
    console.error(`Error creating a new category: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryDetails = req.body;
    if (categoryId) {
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        categoryDetails,
        { new: true }
      );
      if (updatedCategory) {
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ error: "No category found" });
      }
    }
  } catch (err) {
    console.error(`Error updating a category: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    if (categoryId) {
      const deletedCategory = await Category.findByIdAndDelete(categoryId);
      if (deletedCategory) {
        res.status(200).json(deletedCategory);
      } else {
        res.status(404).json({ error: "No category found" });
      }
    }
  } catch (err) {
    console.error(`Error deleting a category: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};
