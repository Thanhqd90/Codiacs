require("dotenv").config();

// =================================================================
// Dependencies
// =================================================================
let express = require("express");
//let path = require("path");
//let favicon = require("static-favicon");
let methodOverride = require("method-override");
let bodyParser = require("body-parser");
//let helpers = require("handlebars-helpers");
// var Handlebars = require('handlebars');
let cookieParser = require("cookie-parser");
let session = require("express-session");
var passport = require("passport");
//app.use(express.static(__dirname + "/public"));
let PORT = process.env.PORT || 3000;
let app = express();

// =================================================================
// Models for syncing
// =================================================================

let db = require("./models");
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
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {}
}));
// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//import routes to give the server access to them.
// require("./controllers/html-routes.js")(app);
// require("./controllers/api-routes.js")(app);
//require("./controllers/controller.js")(app);
let routes = require("./controllers/controller");
app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});
