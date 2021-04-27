const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    try {
      const { fName, lName, email, password, passwordCheck } = req.body;
      if (!fName || !lName || !email || !password || !passwordCheck) {
        return res.status(400).json({ msg: "Must enter all fields" });
      }

      if (password.length < 8) {
        return res
          .status(400)
          .json({ msg: "Password needs to be longer than 8 characters" });
      }

      if (password !== passwordCheck) {
        return res
          .status(400)
          .json({ msg: "Password does not match the password check." });
      }

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      //creating salt (random string) to encrypt user password to safeguard users information
      const salt = await bcrypt.genSalt();
      //hashing (mixing) the salt and password so that it is random string
      const passwordHash = await bcrypt.hash(password, salt);

      const characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let token = "";
      for (let i = 0; i < 25; i++) {
        token += characters[Math.floor(Math.random() * characters.length)];
      }

      const newUser = new User({
        fName,
        lName,
        email,
        password: passwordHash,
        confirmation: token,
      });

      const savedUser = await newUser.save();

      res.json(savedUser);

      //confirmation email once registered
      const nodeEmail = process.env.CONFIRM_EMAIL;
      const nodePass = process.env.CONFIRM_PASS;

      const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: nodeEmail,
          pass: nodePass,
        },
      });

      //
      //
      //
      //
      //
      //CHANGE HREF WHEN DEPLOYING
      const sendConfirmationEmail = () => {
        console.log("Check");
        transport.sendMail({
          from: nodeEmail,
          to: newUser.email,
          subject: "Please confirm your account",
          html: `<h1>Email Confirmation</h1>
          <h2>Hello ${newUser.fName},</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/confirm/${newUser.confirmation}> Click here</a>
          `,
        });
      };
      console.log("newUser", newUser);
      console.log("savedUser", savedUser);
      sendConfirmationEmail(newUser.fName, newUser.email, newUser.confirmation);
    } catch (err) {
      console.log("register err", err);
      res.status(500).json({ msg: err });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("login: ", email, password);
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

      if (user.status != "active") {
        return res
          .status(401)
          .json({ msg: "You must confirm your email before logging in" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  confirmation: async (req, res, next) => {
    console.log("confirmation started");
    try {
      const user = await User.findOne({
        confirmation: req.params.confirmationCode,
      });

      console.log("confirm user found", user);

      if (!user) {
        return res.status(404).json({ msg: "User Not Found." });
      }
      user.status = "active";
      user.save((err) => {
        if (err) {
          res.status(500).json({ msg: err });
        }
        return;
      });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
};
