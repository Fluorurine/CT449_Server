const router = require("express").Router();
const productscontroller = require("../controllers/products.controller");
router.route("/").get(productscontroller.findAll);
module.exports = router;
