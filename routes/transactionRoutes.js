const router = require("express").Router();
const { newTrans, getAll } = require("../controllers/transactionController");

router.post("/new", newTrans);
router.get("/", getAll);

module.exports = router;
