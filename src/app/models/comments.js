const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

commentsSchema = new Schema({
  content: { type: String, require },
  creatAt: { type: Date, default: Date(Date.now()).toString() },
  vidID: String,
  author: {
    UID: String,
    name: String,
    username: String,
    avatar: String,
  },
});

module.exports = mongoose.model("comments", commentsSchema);
