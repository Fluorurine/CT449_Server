const Customer = require("../models/customerModel");

//@desc Return trả về hết tất cả các products có sẵn
//@route GET /api/products
//access public
let findAll = async (req, res) => {
  let result = await Customer.find({});
  res.json(result);
};

module.exports = { findAll };
