const express = require("express");
const router = express.Router();
const usersPageController = require("../app/controllers/usersController");

router.get("/create", usersPageController.create);
router.get("/search", usersPageController.search); //search user header
router.post("/storePost", usersPageController.storePost);
router.post("/register", usersPageController.register); //register in tiktok
router.get("/find/", usersPageController.find); //valid user login
router.get("/:id/edit", usersPageController.editView);
router.use("/:slug", usersPageController.extendShow);
router.get("/", usersPageController.users);

module.exports = router;
