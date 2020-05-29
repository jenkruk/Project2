//    header space


// Require Express for the router
var express = require("express");
var path = require("path");
// test for merging conflicts

// Create the express router, and export at the end of this file
var htmlRoutes = express.Router();

// Routes

htmlRoutes.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../html/index.html"))
});

htmlRoutes.get("/manager", function(req,res){
    res.sendFile(path.join(__dirname,"../html/manager.html"))
});

htmlRoutes.get("/team", function(req,res){
    res.sendFile(path.join(__dirname,"../html/team.html"))
});

htmlRoutes.get("/teampage", function(req,res){
    res.sendFile(path.join(__dirname,"../html/team.html"))
});

htmlRoutes.get("/*", function(req,res){
    res.sendFile(path.join(__dirname,"../html/index.html"))
});


// Export routes for server.js to use.
module.exports = htmlRoutes;
