const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({});

module.exports = Transaction = mongoose.model("transaction", transactionSchema);
