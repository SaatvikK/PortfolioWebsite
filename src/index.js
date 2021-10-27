const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const logger = require("morgan");
const Invalid = "Invalid Option";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));

app.set("view engine", "ejs");

app.listen(port, function() {
  console.log("Server running on port " + port);
});

app.get("/home", function(req, res) {
  res.render("home");
});

app.get("/", function(req, res) {
  res.redirect("home");
});

