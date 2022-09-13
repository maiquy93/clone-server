const express = require("express");
const route = express.Router();
const siteController = require("../app/controllers/siteController");
const videosModel = require("../app/models/videos");
const commentsModel = require("../app/models/comments");

//link cong kenh de len tren
route.use("/search", siteController.search);

//get paginate video
route.get("/videos", async (req, res, next) => {
  const { limit, page } = req.query;
  try {
    const videos = await videosModel.paginate({}, { limit: limit, page: page });
    res.json(videos);
  } catch (error) {}
});
//get comment by idvideo
route.get("/comments", async (req, res, next) => {
  try {
    const comments = await commentsModel.find({ vidID: req.query.vidid });
    res.json(comments);
  } catch (error) {}
});
//add comment
route.post("/commentpost", async (req, res, next) => {
  console.log(req.body);
  try {
    const newcomment = new commentsModel(req.body);
    await newcomment.save();
    res.json(true);
  } catch (error) {
    console.log("can not connect");
  }
});
//delete comment
route.delete("/commentdelete", async (req, res, next) => {
  console.log(req.query);
  try {
    const cmtdelete = await commentsModel.deleteOne({ _id: req.query.id });
    res.json(true);
  } catch (error) {}
});
//video vote
route.put("/videovote", async (req, res, next) => {
  try {
    console.log("body: ", req.body);

    console.log("query: ", req.query);
    const doc = await videosModel.findByIdAndUpdate(req.query.videoID);
    if (!doc.votes.includes(req.query.uservote)) {
      doc.votes = [...doc.votes, req.query.uservote];
    }
    await doc.save();
    res.json("like video success");
  } catch {}
});
//video vote cancel
route.put("/videovotecancel", async (req, res, next) => {
  try {
    const doc = await videosModel.findOneAndUpdate(req.body.videoID);
    if (doc.votes.includes(req.body.uservote)) {
      doc.votes = doc.votes.filter(user => user !== req.body.uservote);
    }
    await doc.save();
    res.json("unlike success");
  } catch {}
});
route.use("/sign", siteController.sign);
route.post("/login-require", siteController.login);
route.get("/", siteController.home);

module.exports = route;
