let express = require("express");
let router = express.Router();
// let db = require("../models");

// Home page
router.get("/", function(req, res) {
    res.render("index");
});
// login page
router.get("/login", function(req, res) {
    res.render("login");
});
// about us page
router.get("/about", function(req, res) {
    res.render("about");
});

module.exports = router;
