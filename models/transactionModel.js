const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: "Enter description of transaction",
  },
  value: {
    type: Number,
    required: "Enter transaction amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  filter: {
    type: Array,
  },
});

module.exports = Transaction = mongoose.model("transaction", transactionSchema);
