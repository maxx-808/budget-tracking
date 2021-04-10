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

      const existingEmail = Account.findOne({ email: email });
      if (existingEmail) {
        return res.status(400).json({ msg: "The email is already in use" });
      }

      //creating salt (random string) to encrypt account password to safeguard users accounts
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
};
