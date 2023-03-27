const mongoose = require("mongoose");
const transactionSchema = mongoose.Schema({
  currentTime: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },

  sender: mongoose.SchemaTypes.ObjectId,
  receiver: mongoose.SchemaTypes.ObjectId,
  items: mongoose.SchemaTypes.ObjectId,
  ammount: Number,
  status: String,
});
module.exports = mongoose.model("Transaction", transactionSchema);
