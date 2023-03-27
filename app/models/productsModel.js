const mongoose = require("mongoose");
//Định nghĩa schema của Products Collection
const productsSchema = mongoose.Schema({
  displayname: String,
  displaypicture: [String],
  publisher: mongoose.SchemaTypes.ObjectId,
  location: String,
  mainCategory: String,
  category: [
    // Chứa thông tin về các loại sản phẩm
    // Loại thêm vào đầu tiên sẽ là loại sản phẩm hiển thị
    // Tối đa là 5 cái
    {
      label: String,
      price: Number,
      remain: Number,
    },
  ],
  desc: String,
  // Cái này sẽ được update mỗi khi khách hàng comment tương ứng (sau các khoàng thời gian) để khỏi phải tìm khi fetch DB
  totalStar: String,
  numberOfReviews: Number,
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
module.exports = mongoose.model("Products", productsSchema);
