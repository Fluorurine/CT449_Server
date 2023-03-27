const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  starNumber: Number,
  author: mongoose.SchemaTypes.ObjectId,
  postAt: mongoose.SchemaTypes.ObjectId,
  content: String,
  currentTime: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});
module.exports = mongoose.model("Comment", commentSchema);
