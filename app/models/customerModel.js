const mongoose = require("mongoose");
// Định nghĩa Schema cho Customer Collection
const customerSchema = mongoose.Schema({
  // Chứa tham số định dạng các kiểu login : Normal và OAuth (Google. Facebook, GitHub)
  // OAuth thi ko cho sửa mk
  acctype: {
    type: String,
    required: [true, "Missing data type"],
  },
  //Hai trạng thái là nỏmal và banned và
  status: String,
  // Các thông tin cơ bản
  username: {
    type: String,
    required: [true, "Thiếu tên đăng nhập"],
  },
  name: { type: String, require: [true, "Vui lòng bổ sung tên của bạn"] },
  firstName: { type: String, require: [true, "Vui lòng bổ sung họ của bạn"] },
  lastName: { type: String, require: [true, "Vui lòng bổ sung họ của bạn"] },
  email: {
    type: String,
    minLength: 10,
    required: [true, "Vui lòng bổ sung email"],
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Bổ sung số điện thoại"],
  },
  address: {
    type: String,
    required: [true, "Thiếu địa chỉ"],
  },
  pictureLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Customer", customerSchema);
