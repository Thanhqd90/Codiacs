let express = require("express");

let router = express.Router();
let db = require("../models");

// Home page
router.get("/", function(req, res) {
    res.redirect("/home");
});

router.get("/home", function(req, res) {
    // db.Blog.findAll({
    //     include: [db.Blogger],
    //     order: [
    //         ["createdAt", "ASC"]
    //     ]
    // }).then(function (dbBlog) {
    //     var hbsObject = {
    //         blog: dbBlog
    //     };
    res.render("index");
});
// });
// login page
router.get("/login", function(req, res) {
    res.render("login");
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

// router.post("/register/create", function(req, res) {
//     db.bloggerPersonalInfo
//         .create({
//             firstName: firstName.val().trim(),
//             lastName: lastName.val().trim(),
//             username: username.val().trim(),
//             email: email.val().trim(),
//             password: password.val().trim(),
//             phone: phone.val().trim(),
//             checkbox: checkbox.val()
//         })
//         .then(function(newUser) {
//             console.log(newUser);
//             // loggedIn = true;
//             res.redirect("/home");
//         });
// });

// router.post("/blog/create", function(req, res) {
//     db.blog
//         .create({
//             firstName: firstName.val().trim(),
//             lastName: lastName.val().trim(),
//             username: username.val().trim(),
//             email: email.val().trim(),
//             password: password.val().trim(),
//             phone: phone.val().trim(),
//             checkbox: checkbox.val()
//         })
//         .then(function(newUser) {
//             console.log(newUser);
//             // loggedIn = true;
//             res.redirect("/home");
//         });
// });
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

//routes for posting blogs
router.post("/blog/create", function(req, res) {
    db.blog.create(req.body).then(function(dbPost) {
        res.json(dbPost);
        res.redirect("/home");
    });
});
//routes for Blogger
router.post("/register/create", function(req, res) {
    db.bloggerPersonalInfo.create(req.body).then(function(newUser) {
        console.log(newUser);
        res.json(newUser);
        res.redirect("/login");
    });
});
module.exports = router;