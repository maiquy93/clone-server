class NewsPageController {
  index(req, res) {
    res.render("news");
  }

  //get /home/:slug
  extendShow(req, res) {
    res.send(`<h1>This is news extend</h1>`);
  }
}

module.exports = new NewsPageController();
