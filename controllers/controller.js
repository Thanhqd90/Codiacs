var express = require("express");

var router = express.Router();
var db = require("../models");

// Home page
router.get("/", function (req, res) {
    res.redirect("/home");
});

router.get("/home", function (req, res) {
    db.Blog.findAll({
        include: [db.Blogger],
        order: [
            ["createdAt", "ASC"]
        ]
    }).then(function (dbBlog) {
        var hbsObject = {
            blog: dbBlog
        };
        res.render("index", hbsObject);
    });
});
// login page
router.get("/login", function (req, res) {
    res.render("login");
});
router.get("/register", function (req, res) {
    res.render("register");
});

module.exports = router;