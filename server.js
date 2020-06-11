// Header space for easier readability

var express = require ("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our models for syncing
var db = require("./models");

// Import routes and give the server access to them.

var routes = require("./routes/routes.js")
app.use(routes);

var router = require("./routes/htmlRoutes");
// app.use(router);
app.use("/", router)


// Syncing our sequelize models and then starting our express app
// use db.sequelize.sync({ force: true }) if you want to drop table each time
db.sequelize.sync().then(function() {
  app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`));
});
