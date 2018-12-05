let express = require("express");
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8080;

let db = require("./models");

let app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

let exphbs = require("express-handlebars");

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

let routes = require("./controllers/controller");

app.use(routes);

// db.sequelize.sync().then(function() {
<<<<<<< HEAD
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
=======
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
>>>>>>> d95988426e2e95e902a003997f49455c4be54a10
// });
