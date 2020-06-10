//    header space

// THESE ARE OUR API ROUTES

// Require Express for the router
var express = require("express");

// Create the express router, and export at the end of this file
var routes = express.Router();

// Require the models
var db = require("../models");
var path = require("path");

// ************************ USER ROUTES ******************************** 

// GET route for getting all of the users
routes.get("/api/users", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.User.findAll({
    raw:true,
    attributes: {
      exclude: ["password"],
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});

routes.get("/api/availableTeam", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.User.findAll({
    raw:true,
    attributes: {
      exclude: ["password"],
    },
    where: {
      manager: false,
      available: true
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});

// GET route for getting one of the users
routes.get("/api/users/:email", function(req, res) {
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

// GET routes for getting all of the projectmembers
routes.get("/api/projectmembers", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.ProjectMember.findAll({raw:true}).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});

// Post to user table
routes.post("/api/newuser", function (req, res) {
  // console.log("Inside new user");

  db.User.create({
      userName: req.body.userName,
      // password: req.body.password,
      first_name: req.body.firstName,
      last_name:req.body.lastName,
      manager: 0,
      email:req.body.email
  }).then(function (result) {
      // console.log("Inserted into user table");
  }).catch(function (err) {
      console.log(err);
  })
})

// Post to user table
routes.put("/api/user/update/:id", function (req, res) {
  var id = req.params.id;
  // console.log("Inside update function of user table");
  // console.log(id);
  db.User.update({
     manager: 1
  }, {
      where: {
       userName: req.params.id
      }
  }).then(function (result) {
      // console.log("Updated user table");
      res.json(result);
  })
})

// ************************ PROJECT ROUTES ******************************** 

// GET route for getting all of the projects
routes.get("/api/projects/:ProjectManagerId", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Project.findAll({
    raw:true,
    where: {ProjectManagerId: req.params.ProjectManagerId},
    include: [db.ProjectMember]

  }).then(function(result) {
    // We have access to the projects as an argument inside of the callback function
    res.json(result);
  });
});

// ************************ TASK ROUTES ******************************** 

// GET route for getting all of the tasks
routes.get("/api/tasks", function(req, res) {
  // findAll returns all entries for the task table when used with no options
  db.Task.findAll({raw:true}).then(function(result) {
  // We have access to the new task as an argument inside of the callback function
      res.json(result);
  });
});

routes.get("/api/waitingTasks", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Task.findAll({
    raw:true,
    where: {
      status: "waiting",
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});
  
routes.get("/api/assignedTasks", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Task.findAll({
    raw:true,
    where: {
      status: "assigned",
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});
  
routes.get("/api/assignedTasks", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Task.findAll({
    raw:true,
    where: {
      status: "assigned",
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});
  
routes.get("/api/activeTasks", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Task.findAll({
    raw:true,
    where: {
      status: "active",
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});
  
routes.get("/api/doneTasks", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Task.findAll({
    raw:true,
    where: {
      status: "done",
    },
  }).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});



// Export routes for server.js to use.
module.exports = routes;