
var express = require("express");

var router = express.Router();
var db = require("../models");

// Home page
router.get("/", function(req, res) {
       res.render("index");
});
// login page
router.get("/login", function(req, res) {
       res.render("login");
});

module.exports = router;
