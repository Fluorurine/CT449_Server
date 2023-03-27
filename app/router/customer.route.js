const router = require("express").Router();
const customerController = require("../controllers/customer.controller");
router.get("/", customerController.findAll);
module.exports = router;
