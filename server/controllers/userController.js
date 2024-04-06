const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const userDetails = req.body;
    if (userDetails) {
      const user = await User.create(userDetails);
      res.status(201).json(user);
    } else {
      res
        .status(400)
        .json({ error: "Please check the required user details." });
    }
  } catch (err) {
    console.error(`Error creating a new user: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    if (userId) {
      const user = await User.findById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "No user found." });
      }
    }
  } catch (err) {
    console.error(`Error creating a new user: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userDetails = req.body;
    if (userId) {
      const updatedUser = await User.findByIdAndUpdate(userId, userDetails, {
        new: true,
      });
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: "No user found." });
      }
    }
  } catch (err) {
    console.error(`Error creating a new user: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (userId) {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (deletedUser) {
        res.status(200).json(deletedUser);
      } else {
        res.status(404).json({ error: "No user found." });
      }
    }
  } catch (err) {
    console.error(`Error creating a new user: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};
