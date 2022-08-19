const express = require("express");
const router = express.Router();
const usersPageController = require("../app/controllers/usersController");

router.get("/create", usersPageController.create);
router.post("/storePost", usersPageController.storePost);
router.use("/:slug", usersPageController.extendShow);
router.get("/", usersPageController.users);

module.exports = router;