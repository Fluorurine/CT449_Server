const MongoUtil = require("../utils/MongoConnection");
const ApiError = require("../utils/api-error");
const jwt = require("jsonwebtoken");

//@desc Dùng để đăng nhập người dùng (Trả về JWT Token lưu vào Cookie để Website sau có thể nhớ)
//route /api/login
//access public
let login = async (req, res, next) => {
  let currentuser;
  if (!req.body.username || !req.body.password) {
    return res.json({ err: "Vui lòng bổ sung đầy đủ thông tin khách hàng" });
  }
  try {
    const userarray = await (
      await MongoUtil.getDb("Customer").find({
        username: req.body.username,
      })
    ).toArray();
    // Có thể BCrypt sau để bảo toàn mật khẩu mã hóa lưu vào Database
    for (let i = 0; i < userarray.length; i++) {
      if (userarray[i].password === req.body.password) {
        currentuser = userarray[i];
      }
    }
    if (currentuser) {
      // Cấp cho người dùng Token lưu trong Cookie
      const accesstoken = await jwt.sign(
        {
          username: currentuser.username,
          password: currentuser.password,
        },
        "B2111871",
        { expiresIn: "8m" }
      );

      res.cookie("access_token", accesstoken, {
        maxAge: 60000 * 8,
        httpOnly: true,
        //secure: true
      });
      res.json({ status: "Login success" });
    } else {
      res.json({ err: "Sai tên đăng nhập hoặc sai mật khẩu" });
    }
  } catch (e) {
    console.log("Có lỗi với cơ sở dữ liệu người dùng");
    return next(new ApiError(404, "Có lỗi khi đăng nhập"));
  }
};
module.exports = { login };
