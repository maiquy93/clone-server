const { response } = require("express");
const usersModel = require("../models/users");

class UsersPageController {
  users(req, res) {
    res.render("users");
  }

  //dung prams.slug de tìm lên database
  extendShow(req, res, next) {
    usersModel
      .findOne({ username: req.params.slug })
      .then(user => {
        user = user.toObject();
        res.render("users/show", { user });
      })
      .catch(next);
  }
  //controller create view
  create(req, res, next) {
    var loginConfirm = {
      confirm: true,
    };
    res.render("users/create");
    // res.json(loginConfirm);
  }

  //constroller create post
  storePost(req, res, next) {
    const newUser = new usersModel(req.body);
    newUser.save().then(() => {
      res.redirect("/");
    });
  }
}

module.exports = new UsersPageController();
