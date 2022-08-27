const express = require("express");
const route = express.Router();
const siteController = require("../app/controllers/siteController");
const videosModel = require("../app/models/videos");

//link cong kenh de len tren
route.use("/search", siteController.search);
route.get("/videos", async (req, res, next) => {
  const { limit, page } = req.query;
  try {
    const videos = await videosModel.paginate({}, { limit: limit, page: page });
    res.json(videos);
  } catch (error) {
    throw new Error("Can not connect");
  }
});
route.use("/sign", siteController.sign);
route.post("/login-require", siteController.login);
route.get("/", siteController.home);

module.exports = route;
