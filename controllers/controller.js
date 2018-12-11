let express = require("express");
let router = express.Router();
let db = require("../models");
let passport = require("../config/passport");

// Home page for each author
router.get("/", function (req, res) {
    res.redirect("/home");
});
router.get("/home", function (req, res) {
    console.log(req.user);
    if (req.user) {
        db.blogs.findAll({
            order: [
                ["createdAt", "DESC"]
            ],
            where: {
                bloggerPersonalInfoId: req.user
            },
            include: [{
                model: db.bloggerPersonalInfo
            }]
        }).then(function (dbPost) {
            //  res.json(dbPost);

            res.render("index", {
                loginStatus: true,
                data: dbPost
            });
        });
        // send data to handlebars and render
    } else {
        db.blogs.findAll({
            order: [
                ["createdAt", "DESC"]
            ]
        }).then(function (dbPost) {
            //  res.json(dbPost);

            res.render("index", {
                data: dbPost
            });
        });
    }
});
// login page
router.get("/login", function (req, res) {
    res.render("login");
});
router.post("/login", passport.authenticate("local"), function (req, res) {
    res.redirect("/home");
});

//logout redirects back to homepage
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/register", function (req, res) {
    res.render("register");
});

router.get("/blog/author", function (req, res) {
    res.render("author");
});

router.get("/blog/viewall", function (req, res) {
    // grab the user id that matches with users table
    var userId = req.user;
    db.blogs.findAll({
        order: [
            ["createdAt", "DESC"]
        ],
        where: {
            bloggerPersonalInfoId: userId
        },
        include: [{
            model: db.bloggerPersonalInfo
        }]
    }).then(function (dbPost) {
        //  res.json(dbPost);

        res.render("viewall", {
            loginStatus: true,
            data: dbPost
        });
    });
});

router.get("/blog/single", function (req, res) {
    res.render("single");
});

router.get("/blog/new", function (req, res) {
    var userId = req.user;
    db.blogs.findAll({
        where: {
            bloggerPersonalInfoId: userId
        },
        include: [{
            model: db.bloggerPersonalInfo
        }]
    }).then(function (dbPost) {
        //  res.json(dbPost);

        res.render("newPost", {
            loginStatus: true,
            data: dbPost
        });
    });
});

// about us page
router.get("/about", function (req, res) {
    var userId = req.user;
    db.blogs.findAll({
        where: {
            bloggerPersonalInfoId: userId
        },
        include: [{
            model: db.bloggerPersonalInfo
        }]
    }).then(function (dbPost) {
        //  res.json(dbPost);

        res.render("about", {
            loginStatus: true,
            data: dbPost
        });
    });
});

//routes for posting blogs
router.post("/blog/create", function (req, res) {
    var userId = req.user;
    console.log(req.body);
    db.blogs.create({
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
            bloggerPersonalInfoId: userId
        })
        .then(function (dbBlog) {
            console.log(dbBlog);
            console.log("I am redirecting");
            res.redirect("/blog/viewall");
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        });
});

function isAlpha(str) {
    let code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            console.log("isAlpha false");
            return false;
        }
    }
    console.log("isAlpha true");
    return true;
}


//routes for Blogger
router.post("/register", function (req, res) {
    if (!isAlpha(req.body.firstName) || !isAlpha(req.body.lastName)) {
        res.render("register");
        return;
    }

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
        .then(function () {
            console.log("I am redirecting");
            res.redirect(307, "/login");
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
});

// highchart code starts

router.get("/cityData/:city", function (req, res) {
    db.blogs.findAll({
        attributes: [
            "category",
            [db.Sequelize.literal("COUNT((category))"), "countOfCategory"]
        ],
        where: {
            cityVisited: req.params.city
        },
        group: "category"
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});
module.exports = router;