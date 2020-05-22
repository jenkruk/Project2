//    header space
var express = require("express");

var router = express.Router();
var db = require("../models");

router.get("/api/projects", function (req, res){
    db.Project.findAll({raw:true}).then(function (result) {
    

        res.json(result);
    });
});

// GET route for getting all of the projects
router.get("/api/tasks", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Task.findAll({raw:true}).then(function(result) {
      // We have access to the team as an argument inside of the callback function
      res.json(result);
    });
  });
  // GET route for getting all of the projects
router.get("/api/users", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.User.findAll({raw:true}).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});
  // GET route for getting all of the projects
  router.get("/api/projectmembers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.ProjectMember.findAll({raw:true}).then(function(result) {
      // We have access to the team as an argument inside of the callback function
      res.json(result);
    });
  });

  module.exports=router




