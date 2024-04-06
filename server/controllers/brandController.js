const Brand = require("../models/brand");

exports.getAllBrands = async (req, res) => {
  try {
    const brandsList = await Brand.find({});
    if (brandsList.length > 0) {
      res.status(200).json(brandsList);
    } else {
      res.status(404).json({ error: "No brands found" });
    }
  } catch (err) {
    console.error(`Error fetching the list of brands: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.createBrand = async (req, res) => {
  try {
    const brandDetails = req.body;
    if (brandDetails) {
      const brand = await Brand.create(brandDetails);
      res.status(201).json(brand);
    }
  } catch (err) {
    console.error(`Error creating a new brand: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    const brandDetails = req.body;
    if (brandId) {
      const updatedBrand = await Brand.findByIdAndUpdate(brandId, brandDetails, {
        new: true,
      });
      if (updatedBrand) {
        res.status(200).json(updatedBrand);
      } else {
        res.status(404).json({ error: "No brand found" });
      }
    }
  } catch (err) {
    console.error(`Error updating a brand: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const brandId = req.params.id;
    if (brandId) {
      const deletedBrand = await Brand.findByIdAndDelete(brandId);
      if (deletedBrand) {
        res.status(200).json(deletedBrand);
      } else {
        res.status(404).json({ error: "No brand found" });
      }
    }
  } catch (err) {
    console.error(`Error deleting a brand: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};
