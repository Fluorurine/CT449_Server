// This model is for testing only nha.
const mongoose = require("mongoose");
const TestSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Add name plsssss"],
  },
  cusnum: Number,
});
module.exports = mongoose.model("Test model", TestSchema);
