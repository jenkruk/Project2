//    header space


// Require Express for the router
var express = require("express");
var path = require("path");
// test for merging conflicts

// Create the express router, and export at the end of this file
var router = express.Router();

// Routes

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../html/index.html"))
});

router.get("/manager", function(req,res){
    res.sendFile(path.join(__dirname,"../html/manager.html"))
});

router.get("/team", function(req,res){
    res.sendFile(path.join(__dirname,"../html/team.html"))
});

router.get("/teampage", function(req,res){
    res.sendFile(path.join(__dirname,"../html/team.html"))
});

router.get("/*", function(req,res){
    res.sendFile(path.join(__dirname,"../html/index.html"))
});


// Export routes for server.js to use.
module.exports = router;
