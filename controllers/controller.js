<<<<<<< HEAD
let express = require("express");
let router = express.Router();
// let db = require("../models");

// Home page
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    res.render("index");
});

router.get("/view", function(req, res) {
    res.render("view");
=======

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
// var express = require("express");

var router = express.Router();
var db = require("../models");

// Home page
router.get("/", function(req, res) {
      return res.render("index");
});
// login page
router.get("/login", function(req, res) {
      return res.render("login");
>>>>>>> d95988426e2e95e902a003997f49455c4be54a10
});

module.exports = router;