// var db = require("../models");
// var path = require("path");

// module.exports = function (app) {

//     // app.get("/", function (req, res) {
//     //     console.log("Inside root route");
//     //     res.sendFile(path.join(__dirname + "/../html/index.html"));
//     // })

//     // Post to user table
//     app.post("/api/newuser", function (req, res) {
//         // console.log("Inside new user");

//         db.User.create({
//             userName: req.body.userName,
//             password: req.body.password
           
//         }).then(function (result) {
//             console.log("Inserted into user table");
//         }).catch(function (err) {
//             console.log(err);
//         })
//     })

// }