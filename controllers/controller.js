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
            include: [{
                model: db.bloggerPersonalInfo
            }]
        }).then(function (dbPost) {
            db.bloggerPersonalInfo.findOne({
                where: {
                    id: req.user
                },
                raw: true
            }).then(function (dbUser) {
                //res.json(dbPost);
                //console.log(dbPost);
                res.render("index", {
                    loginStatus: true,
                    data: dbPost, dbUser
                });
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
router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}));
//logout redirects back to homepage
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/register", function (req, res) {
    res.render("register");
});

router.get("/viewall", function (req, res) {
    // grab the user id that matches with users table
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
        db.bloggerPersonalInfo.findOne({
            where: {
                id: req.user
            },
            raw: true
        }).then(function (dbUser) {
            res.render("viewall", {
                loginStatus: true,
                data: dbPost, dbUser
            });
        });
    });
});
router.get("/new", function (req, res) {
    db.blogs.findAll({}).then(function (dbPost) {
        //  res.json(dbPost);
        db.bloggerPersonalInfo.findOne({
            where: {
                id: req.user
            },
            raw: true
        }).then(function (dbUser) {
            res.render("newPost", {
                loginStatus: true,
                data: dbPost, dbUser
            });
        });
    });
});

// about us page
router.get("/about", function (req, res) {
    if (req.user) {
        db.blogs.findAll({}).then(function (dbPost) {
            //  res.json(dbPost);
            db.bloggerPersonalInfo.findOne({
                where: {
                    id: req.user
                },
                raw: true
            }).then(function (dbUser) {
                res.render("about", {
                    loginStatus: true,
                    data: dbPost, dbUser
                });
            });
        });
    } else {
        res.render("about", { loginStatus: false });
    }
});

//routes for posting blogs
router.post("/create", function (req, res) {
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
            res.redirect("/viewall");
        })
        .catch(function (err) {
            console.log(err);
            res.json(err);
        });
});

//routes for Blogger
router.post("/register", function (req, res) {
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