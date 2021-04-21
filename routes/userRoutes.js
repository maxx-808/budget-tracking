const router = require("express").Router();
const auth = require("../middleware/auth");
const { register, login } = require("../controllers/userController");

router.post("/register", register);
router.post("login", login);

module.exports = router;
