const videosModel = require("../models/videos");
const mongoosePaginate = require("mongoose-paginate-v2");

videosModel.plugin(mongoosePaginate);

class videosController {
  getVideos(req, res, next) {
    videosModel.paginate().then({});
  }
}
