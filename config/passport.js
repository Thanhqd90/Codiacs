var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
        usernameField: "email",
    },
    function(email, password, done) {
        // When a user tries to sign in this code runs
        db.bloggerPersonalInfo.findOne({
            where: {
                email: email
            },
            raw: true
        }).then(function(dbUser) {
            // If there"s no user with the given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            if (dbUser.password !== password) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            console.log("Congrats");
            return done(null, dbUser);
        });
    }
));
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    cb(null, id);
});

// Exporting our configured passport
module.exports = passport;