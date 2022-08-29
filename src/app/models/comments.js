const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

commentsSchema = new Schema({
  _id: ObjectId,
  content: { type: String, require },
  creatAt: { type: Date, default: Date(Date.now()).toString() },
  vidID: String,
  author: {
    UID: String,
    name: String,
    username: String,
  },
});

module.exports = mongoose.model("comments", commentsSchema);
