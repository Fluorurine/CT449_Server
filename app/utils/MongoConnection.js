const mongoose = require("mongoose");
module.exports = async () => {
  // Kết nối với CSDL
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017"
    );

    console.log("Server has been connected");
  } catch (e) {
    console.log("Xảy ra lỗi khi kết nối CSDL");
    console.log(e);
    process.exit(1);
  }
};
