const newsRouter = require("./newsRoute");
const siteRoute = require("./site");
const usersRoute = require("./usersRoute");
const meRoute = require("./meRoute");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRoute);
  app.use("/users", usersRoute);
  app.use("/me", meRoute);
}

module.exports = route;
