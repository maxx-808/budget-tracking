const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = {
  contactSend: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      res.json(req.body);
      console.log("contact send: ", req.body);
    } catch (err) {
      console.log("contactSend controller err", err);
      res.status(500).send(err.response);
    }
  },
};
