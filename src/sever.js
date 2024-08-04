require("dotenv").config();
const express = require("express"); //common js
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
//
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// config rep.body
app.use(express.json()); //from json
app.use(express.urlencoded({ extended: true })); //from data
// config templte engine
configViewEngine(app);

//khai báo route
app.use(webRoutes);

//test connection

//simple query
// connection.query("SELECT * FROM users u ", function (err, results, fields) {
//   console.log(">>results=", results);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
