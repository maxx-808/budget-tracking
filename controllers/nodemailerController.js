const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

module.exports = {
  contactSend: async (req, res) => {
    try {
      const id = process.env.CLIENT_ID;
      const secret = process.env.CLIENT_SECRET;
      const refresh = process.env.CLIENT_REFRESH_TOKEN;

      const nodeEmail = process.env.CONFIRM_EMAIL;
      const nodePass = process.env.CONFIRM_PASS;

      const oauth2Client = new OAuth2(
        id,
        secret,
        "https://developers.google.com/oauthplayground"
      );

      oauth2Client.setCredentials({
        refresh_token: refresh,
      });
      const accessToken = oauth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          type: "OAuth2",
          user: nodeEmail,
          pass: nodePass,
          clientId: id,
          clientSecret: secret,
          refreshToken: refresh,
          accessToken: accessToken,
        },
      });

      transport.verify((err, success) => {
        if (err) {
          console.log("transport verify err: ", err);
        } else {
          console.log("server is ready to take messages");
        }
      });

      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;
      const content = `name: ${name} \n email: ${email} \n message: ${message} `;

      const mail = {
        from: name,
        to: process.env.CONFIRM_EMAIL,
        subject: "Message from contact form",
        text: content,
      };

      transport.sendMail(mail, (err, data) => {
        if (err) {
          res.json({ status: "fail" });
        } else {
          res.json({ status: "success" });
        }
      });
    } catch (err) {
      console.log("contactSend controller err", err);
      res.status(500).send(err.response);
    }
  },
};
