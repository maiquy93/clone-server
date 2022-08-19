const express = require("express");
const router = express.Router();
const newsPageController = require("../app/controllers/NewsPageController");
router.use("/:slug", newsPageController.extendShow);
router.use("/", newsPageController.index);
//sau nay muon them noi dung cho trang news voi path /news/balabala thi tao them route
module.exports = router;
