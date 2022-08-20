const usersModel = require("../models/users");

class mePageController {
  mydata(req, res, next) {
    usersModel
      .find({})
      .then(users => {
        users = users.map(user => user.toObject());
        res.render("users/dataview", { users });
      })
      .catch(next);
  }

  //controller edit view
  editView(req, res) {
    usersModel
      .findOne({ _id: req.params.id })
      .then(user => {
        user = user.toObject();
        res.render("editView");
      })
      .catch(next);
  }
}

module.exports = new mePageController();
