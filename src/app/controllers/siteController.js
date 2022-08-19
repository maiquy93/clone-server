const usersModel = require("../models/users");

class SiteController {
  home(req, res, next) {
    usersModel
      .find({})
      .then(users => {
        // console.log(users);
        users = users.map(data => data.toObject());
        res.render("home", { users });
      })
      .catch(next);
  }
  search(req, res, next) {
    res.render("search");
  }
  sign(req, res) {
    res.render("sign");
  }
}

module.exports = new SiteController();
