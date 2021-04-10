const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});

module.exports = User = mongoose.model("user", userSchema);
