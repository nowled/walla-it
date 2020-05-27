require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");



module.exports = {
  init(app, express) {
    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    app.use(express.static(path.join(__dirname, "..", "assets")));
  }
}