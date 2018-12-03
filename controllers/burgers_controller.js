
var express = require("express");

var router = express.Router();
var db = require("../models");

// Home page
router.get("/", function(req, res) {
  db.Model.findAll({})
    .then(function(dbModel) {
      var hbsObject = {
        model: dbModel
      };
      console.log("Test")
      return res.render("index", hbsObject);
    });
});


module.exports = router;
