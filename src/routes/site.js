const express = require("express");
const route = express.Router();
const siteController = require("../app/controllers/siteController");

//link cong kenh de len tren
route.use("/search", siteController.search);
route.use("/sign", siteController.sign);
route.post("/login-require", siteController.login);
route.get("/", siteController.home);

module.exports = route;
