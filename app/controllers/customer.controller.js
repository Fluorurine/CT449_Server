const Customer = require("../models/customerModel");

//@desc Trả về tất cả các khách hàng trong CSDL\
//route GET /api/customer/
//@access private (Chỉ khi có token cùa admin)
let findAll = async (req, res, next) => {
  try {
    let result = await Customer.find({});
    res.json(result);
  } catch (e) {}
};

// let findAll = async (req, res, next) => {
//   try {
//   } catch (e) {}
// };
module.exports = { findAll };
