const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
  },
  lName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  confirmation: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    enum: ["pending", "active"],
    default: "pending",
  },
});

module.exports = User = mongoose.model("user", userSchema);
