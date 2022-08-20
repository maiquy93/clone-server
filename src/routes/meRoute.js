const express = require("express");
const router = express.Router();
const mePageController = require("../app/controllers/meController");

router.get("/stored/data", mePageController.mydata);
router.get("users/:id", mePageController.editView);

module.exports = router;
