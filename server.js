//server dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
require("dotenv").config;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget-tracking",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to mongodb");
  }
);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

//calling the routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/send", require("./routes/nodemailerRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
