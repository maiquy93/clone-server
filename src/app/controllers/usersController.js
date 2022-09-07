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
  //sign in tiktok page
  register(req, res, next) {
    const newUser = new usersModel(req.body);
    console.log(req.body);
    newUser.save().then(() => {
      res.json(true);
    });
  }
  find(req, res, nex) {
    console.log(req.query);
    usersModel.findOne({ username: req.query.user }).then(user => {
      if (user) res.json(true);
      else res.json(false);
    });
  }
  //controller edit view
  editView(req, res, next) {
    usersModel
      .findOne({ _id: req.params.id })
      .then(user => {
        user = user.toObject();
        res.render("users/editView", { user });
        // res.json(user);
      })
      .catch(next);
  }
}

module.exports = new UsersPageController();
