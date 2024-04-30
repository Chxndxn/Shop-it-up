const User = require("../models/user");
const crypto = require("crypto");

exports.signupUser = async (req, res) => {
  try {
    const userDetails = req.body;
    if (userDetails) {
      const newUserAccount = await User.create(userDetails);
      res
        .status(201)
        .json({ id: newUserAccount.id, role: newUserAccount.role });
    }
  } catch (err) {
    console.error(`Error creating an account for the user: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
  const user = await User.create();
};

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (email) {
      const user = await User.findOne({ email: email });
      if (!user) {
        res
          .status(401)
          .json({ message: "No user account found for the email" });
      }
      const decodedPassword = Buffer.from(user.password, "base64").toString(
        "utf-8"
      );
      if (decodedPassword === password) {
        res.status(200).json({
          id: user.id,
          role: user.role,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (err) {
    console.error(`Error logging into the account: ${err}`);
    res.status(500).json({ error: err.message || err });
  }
};
