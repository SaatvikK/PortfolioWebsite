const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const logger = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(logger("dev"));

app.set("view engine", "ejs");

app.listen(port, function() {
  console.log("Server running on port " + port);
});

app.get("/home", function(req, res) {
  res.render("home");
});

app.get("/projects", function(req, res) {
  res.render("projects")
});

app.get("/aboutme", function(req, res) {
  res.render("aboutme");
});

app.post("/projects", function(req, res) {
  res.redirect("projects");
});

app.get("/", function(req, res) {
  res.redirect("home");
});