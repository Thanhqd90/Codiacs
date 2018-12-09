let express = require("express");
let router = express.Router();
let db = require("../models");
let passport = require("../config/passport");

// Home page for each author
router.get("/", function(req, res) {
    res.redirect("/home");
});
router.get("/home", function(req, res) {
    console.log(req.user);
    if (req.user) {
        db.bloggerPersonalInfo.findOne({
            where: {
                id: req.user
            },
            raw: true
        }).then((dbUser) => {
            // send data to handlebars and render
            res.render("index", {
                loginStatus: true,
                dbUser
            });
        });
        // db.blogs.findAll({
        //     where: query,
        //     include: [db.bloggerPersonalInfo]
        //   }).then(function(dbPost) {
        //     res.json(dbPost);
        //   });
    } else {
        res.render("index");
    }
});

// login page
router.get("/login", function(req, res) {
    res.render("login");
});
router.post("/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/home");
});

//logout redirects back to homepage
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/register", function(req, res) {
    res.render("register");
});

// router.get("/settings", function(req, res) {
//     res.render("settings");
// });

router.get("/blog/author", function(req, res) {
    res.render("author");
});

router.get("/blog/viewall", function(req, res) {
    res.render("viewall");
});

router.get("/blog/single", function(req, res) {
    res.render("single");
});

router.get("/blog/new", function(req, res) {
    res.render("newPost");
});

// about us page
router.get("/about", function (req, res) {
    res.render("about");
});

//routes for posting blogs
router.post("/blog/create", function(req, res) {
    console.log(req.body);
    db.blogs.create(
        {
            title: req.body.title,
            isVisible: req.body.isVisible,
            mustHaves: req.body.mustHaves,
            stayAt: req.body.stayAt,
            placesVisited: req.body.placesVisited,
            photos: req.body.photos,
            experience: req.body.experience,
            bestTime: req.body.bestTime,
            countryVisited: req.body.countryVisited,
            cityVisited: req.body.cityVisited,
            category: req.body.category,

        })
        .then(function() {
            res.redirect(307, "/blog/viewall");
        })
        .catch(function(err) {
            console.log(err);
            res.json(err);
        // res.status(422).json(err.errors[0].message);
        });
});

//routes for Blogger
router.post("/register", function(req, res) {
    console.log(req.body);
    db.bloggerPersonalInfo
        .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            securityQuestion: req.body.securityQuestion,
            answer: req.body.answer
        })
        .then(function() {
            console.log("I am redirecting");
            res.redirect(307, "/login");
        })
        .catch(function(err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
});
module.exports = router;