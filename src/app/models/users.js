const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const usersSchema = new Schema(
  {
    author: ObjectId,
    uid: String,
    name: String,
    nickname: String,
    avatar: String,
    email: String,
    username: { type: String, require: true, unique: true },
    password: String,
    check: Boolean,
    userbackground: String,
    createdAt: { type: Date, default: Date(Date.now()).toString() },
  }
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("users", usersSchema);
