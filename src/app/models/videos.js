const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongoosePaginate = require("mongoose-paginate-v2");

const videosSchema = new Schema({
  _id: ObjectId,
  videoTitle: String,
  videoUrl: { type: String, require },
  author: {
    userID: ObjectId,
    userName: String,
    usernickname: String,
    userAvatar: String,
  },
  date: { type: Date, default: Date.now },
  votes: { type: Number },
  music: String,
});

videosSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("videos", videosSchema);
