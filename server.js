let express = require("express");
let bodyParser = require("body-parser");
let session = require("express-session");
let path = require("path");
// Requiring passport as we've configured it
let passport = require("./config/passport");
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");
let db = require("./models");
let app = express();

//app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public")));
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
