const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    try {
      const { fName, lName, email, password, passwordCheck } = req.body;
      if (!fName || !lName || !email || !password || !passwordCheck) {
        return res.status(400).json({ msg: "Must enter all fields" });
      }

      if (!password.length < 8) {
        return res
          .status(400)
          .json({ msg: "Password needs to be longer than 8 characters" });
      }

      if (password !== passwordCheck) {
        return res
          .status(400)
          .json({ msg: "Password does not match the password check." });
      }

      const existingEmail = User.findOne({ email: email });
      if (existingEmail) {
        return res.status(400).json({ msg: "The email is already in use" });
      }

      //creating salt (random string) to encrypt user password to safeguard users information
      const salt = await bcrypt.genSalt(20);
      //hashing (mixing) the salt and password so that it is random string
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        fName,
        lName,
        email,
        password: passwordHash,
      });
      const savedUser = await newUser.save();
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email) {
        res.status(400).json({ msg: "Please enter an email" });
      }
      if (!password) {
        res.status(400).json({ msg: "Please enter a password" });
      }

      const user = await User.findOne({ email: email });
      if (!user) {
        res.status(401).json({
          msg: "The email or password you have entered is incorrect",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res
          .status(401)
          .json({ msg: "The email or password you have entered is incorrect" });
      }
      const token = jwt.sign({ id: userContext._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.json({
        token,
        user: {
          id: user._id,
          email: user.email,
          name: [user.fName, user.lName],
        },
      });
    } catch (err) {}
  },
};