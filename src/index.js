const express = require("express");
const path = require("path");
const { dirname } = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const { render } = require("node-sass");
const route = require("./routes");
const db = require("./config/db");
const app = express();
const port = 8000;

const cors = require("cors");
//connect db
db.connect();

app.use(cors());
app.use(morgan("combined")); //HTTP logs

//Middleware sử lý post từ form
app.use(
  express.urlencoded({
    extended: true,
  })
);
//MiddleWare sử lý post qua thư viện js hoặc code js
//XMLHttprequest, fetch, axios, ...
app.use(express.json());
//tao duong dan tinh
app.use(express.static(path.join(__dirname, "public"))); // co the join nhieu doi so
//sử dụng với extname là handlebars
app.engine(
  "handlebars",
  engine({
    extname: "handlebars",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
); //sử dụng templace engine là handlebars() với name là "handlebars"
app.set("view engine", "handlebars"); //set view engine là 'handlebars'
app.set("views", "./src/resources/views");

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
