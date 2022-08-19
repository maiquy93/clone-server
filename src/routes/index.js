const newsRouter = require("./newsRoute");
const siteRoute = require("./site");
const usersRoute = require("./usersRoute");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRoute);
  app.use("/users", usersRoute);
}

module.exports = route;
