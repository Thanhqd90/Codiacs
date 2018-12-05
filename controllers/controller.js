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
});

module.exports = router;