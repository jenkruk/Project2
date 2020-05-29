//    header space

// Require Express for the router
var express = require("express");

// Create the express router, and export at the end of this file
var taskRoutes = express.Router();

// Require the models
var db= require("../models")

// Post to user table
taskRoutes.post("/api/tasks/:newTask", function (req, res) {
  console.log("New Task Added");

  db.Task.create({
      task_name: req.params.task_name,
  }).then(function (result) {
      console.log("Inserted into user table");
  }).catch(function (err) {
      console.log(err);
  })
})

// GET route for getting all of the tasks
taskRoutes.get("/api/tasks", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Task.findAll({raw:true}).then(function(result) {
      // We have access to the team as an argument inside of the callback function
      res.json(result);
    });
  });

// POST route for getting all of the tasks
taskRoutes.post("/api/tasks", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Task.findAll({raw:true}).then(function(result) {
    // We have access to the team as an argument inside of the callback function
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = taskRoutes;