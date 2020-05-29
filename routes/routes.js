//    header space

// THESE ARE OUR API ROUTES


// Require Express for the router
var express = require("express");

// Create the express router, and export at the end of this file
var router = express.Router();

// Require the models
var db = require("../models");
var path = require("path");

// Routes
router.get("/", function (req, res) {
  // console.log("Inside root route");
  res.sendFile(path.join(__dirname , "../html/index.html"));
})

// Routes
router.get("/team", function (req, res) {
   
  res.sendFile(path.join(__dirname , "../html/team.html"));
})

router.get("/manager", function (req, res) {
   
  res.sendFile(path.join(__dirname , "../html/manager.html"));
})

// Post to user table
router.post("/api/newuser", function (req, res) {
  console.log("Inside new user");

  db.User.create({
      userName: req.body.userName,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name:req.body.lastName,
      email:req.body.email
  }).then(function (result) {
      console.log("Inserted into user table");
  }).catch(function (err) {
      console.log(err);
  })
})

// GET route for getting all of the projects
router.get("/api/projects", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Project.findAll({raw:true}).then(function(result) {
    // We have access to the projects as an argument inside of the callback function
    res.json(result);
  });
});

  // GET route for getting all of the users
router.get("/api/users", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.User.findAll({raw:true}).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});

  // GET route for getting one of the users
  router.get("/api/users/:email", function(req, res) {
    db.User.findOne({
      raw:true,
      where: {
        email: req.params.email,
      },
      attributes: {
        exclude: ["password"],
      },
      include: [db.ProjectMember]
      }).then(function(result) {
      // We have access to the user as an argument inside of the callback function
      res.json(result);
    });
  });

  // GET route for getting all of the projectmembers
  router.get("/api/projectmembers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.ProjectMember.findAll({raw:true}).then(function(result) {
      // We have access to the team as an argument inside of the callback function
      res.json(result);
    });
  });


// Export routes for server.js to use.
module.exports = router;