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

module.exports.sendCOnfirmationEmail = (req, res) => {
    const account = await User.findOne({ email: email });
  console.log("Check");

  transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
    <h2>Hello ${fName}</h2>
    <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
    `,
  });
};
