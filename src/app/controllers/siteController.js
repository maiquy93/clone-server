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
      .then(() => {})
      .catch(next);
  }
  search(req, res, next) {
    res.render("search");
  }
  sign(req, res) {
    res.render("sign");
  }
  login(req, res, next) {
    const test = { value: true };
    usersModel
      .findOne({ username: req.body.username })
      .then(user => {
        if (user) {
          if (req.body.psw === user.password) {
            const data = { ...user, isLogin: true };
            res.json(data);
          } else {
            res.send(false);
          }
        } else {
          res.json(false);
        }
      })
      .catch(next);
  }
}

module.exports = new SiteController();
