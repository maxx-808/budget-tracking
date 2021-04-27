const nodemailer = require("nodemailer");
require("dotenv").config();

const user = process.env.CONFIRM_EMAIL;
const pass = process.env.CONFIRM_PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendCOnfirmationEmail = (name, email, confirmationCode) => {
  console.log("Check");
};
