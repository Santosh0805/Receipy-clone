const User = require("../models/user.model");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);

    if (user) {
      res
        .status(200)
        .json({
          message: "User logged in successfully",
          token,
          user: { _id: user._id, email: user.email, name: user.name },
        });
    } else {
      res.status(401).json({ message: "invalid credientials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Password is not Match" });
    
  }
};

module.exports = { register, login };
