const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter the name of this transaction",
  },
  description: {
    type: String,
    trim: true,
    default: "No description",
  },
  value: {
    type: Number,
    required: "Enter transaction amount",
  },
  date: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
  filter: {
    type: Array,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = Trans = mongoose.model("transaction", transactionSchema);
