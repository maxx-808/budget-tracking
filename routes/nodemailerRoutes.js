const router = require("express").Router();
const { contactSend } = require("../controllers/nodemailerController");

router.post("/send", contactSend);

module.exports = router;
