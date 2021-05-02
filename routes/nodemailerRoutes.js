const router = require("express").Router();
const { contactSend } = require("../controllers/nodemailerController");

router.post("/msg", contactSend);

module.exports = router;
