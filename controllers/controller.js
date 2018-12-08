let express = require("express");
let router = express.Router();
let db = require("../models");
let passport = require("../config/passport");

// Home page for each author
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    db.blogs
        .findAll({
            include: [db.bloggerPersonalInfo],
            order: [["title", "DESC"]]
        })
        .then(function(dbBlogs) {
            let hbsObject = {
                blogs: dbBlogs
            };
            return res.render("index", hbsObject);
        });
});
// });

// login page
router.get("/login", function(req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local"), function(req, res) {
    db.bloggerPersonalInfo
        .findAll({
            attributes: ["id", "firstName", "lastName", "password"],
            where: { email: req.body.email }
        })
        .then(results => {
            // Compare hashes to verify the user
            bcrypt.compare(
                req.body.password,
                results[0].password,
                (error, isMatch) => {
                    if (isMatch) {
                        db.blogs
                            .findAll({
                                include: [db.bloggerPersonalInfo],
                                where: { id: results[0].id }
                            })
                            .then(function(dbBlogs) {
                                let hbsObject = {
                                    blogs: dbBlogs
                                };
                                res.redirect("viewall", hbsObject);
                            });
                        // If the username or password does not match, display an error message
                    } else {
                        res.redirect("error");
                    }
                }
            );
        });
});

//logout redirects back to homepage
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/register", function(req, res) {
    res.render("register");
});

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
router.get("/about", function(req, res) {
    res.render("about");
});

//routes for posting blogs
router.post("/blog/create", function(req, res) {
    db.blog.create(req.body).then(function(dbPost) {
        res.json(dbPost);
        res.redirect("/home");
    });
});
//routes for Blogger
router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.bloggerPersonalInfo
        .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            securityQuestion: req.body.securityQuestion,
            answer: req.body.answer,
            acceptTerm: req.body.acceptTerm
        })
        .then(function() {
            res.redirect(307, "/loginPage");
        })
        .catch(function(err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
});
module.exports = router;
