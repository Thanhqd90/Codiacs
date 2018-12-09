
// Grab key from .env file applies to Twiiter and facebook Oauth
require("dotenv").config();

// =================================================================
// Dependencies
// =================================================================
var express = require("express");
//var path = require("path");
//var favicon = require("static-favicon");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
//var helpers = require("handlebars-helpers");
// var Handlebars = require("handlebars");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");


// =================================================================
// Initialize new Express app
// =================================================================
var PORT = process.env.PORT || 3000;
var app = express();

// =================================================================
// Models for syncing
// =================================================================

var db = require("./models");

// Serve static content for the app from the public directory in the application directory

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set handlebars
var exphbs = require("express-handlebars");




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Write cookies on header
app.use(cookieParser());

// create a session for user
// app.set("trust proxy", 1) // trust first proxy
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {}
}));
// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
let routes = require("./controllers/controller");
app.use(routes);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("listening on port %s", PORT);
    });
});