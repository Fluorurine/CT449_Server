const Customer = require("../utils/MongoConnection");
const ApiError = require("../utils/api-error");

//@desc Trả về tất cả các khách hàng trong CSDL\
//route GET /api/customer/
//@access private (Chỉ khi có token cùa admin)
let findAll = async (req, res, next) => {
  try {
    const data = await Customer.getDb("Customer").find({});

    res.json(data.toArray());
  } catch (e) {
    console.log("Có lỗi với cơ sở dữ liệu người dùng");
    return next(new ApiError(404, "Có lỗi với cơ sở dữ liệu người dùng"));
  }
};

// let findAll = async (req, res, next) => {
//   try {
//   } catch (e) {}
// };
module.exports = { findAll };
