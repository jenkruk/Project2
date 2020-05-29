// header space 

$("#add-form").hide();

 $(document).ready(function(){
//   var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
//   $("#login-btn").on("click", function (event) {
//     event.preventDefault();
//     console.log("Inside login button");
//     var username= document.getElementById('loginUserName').value
//     //  var username = $("#loginUserName").val().trim();
//     // var password = $("#loginpassword").val().trim();
//     getUser(username);
//     // getUser(username, password);
// })

// function getUser(username) {
    
// // function getUser(username, password) {
//     // $.get("/api/login/" + username + "/" + password, function (data) {
//         $.get("/api/login/" + username, function (data) {
//         console.log(data);
//         if(data === null)
//         alert("Please create an account");
//         uniqueUserId = data.id;
//         console.log(uniqueUserId);
//         window.location = "/" + uniqueUserId;
//     })
// }


//   $("#submit-btn").on("click", function (event) {
//     event.preventDefault();
//     console.log("Inside submit button");
//     var  project_name = $("textarea#blogText").val().trim();
//     var project_status = $("textarea#blogTitle").val().trim();
// var UserId = "";
//     var newProject = {
//         userId: userId,
//         project_name: project_name,
//         project_status: project_status
//     }

//     // Post to blog table
//     $.ajax("/api/new/blog", {
//         type: "POST",
//         data: newProject
//     }).then(function (result) {
//         console.log("Inserted into Blog Table");

//         // Update user table
//         $.ajax("/api/user/update/" + userId, {
//             type: "PUT"
//         }).then(function () {
//             console.log("Updated value to user table")
//         })
//     })
//     location.reload();
// })







  $("#del").on("click",function() {
    var li = $(this).parent();
    li.fadeOut(function(){
      li.remove();
    });
  });

  $("#openForm").on("click", function() {
  $("#openForm").hide();
  $("#add-form").show();
});

  $(".plus").on("click",function(e){
    
    if($(".txtb").val() != "")
    {
      var team = $("<li class='team-value'></li>").text($(".txtb").val().trim());
      var del = $("<i class='tiny material-icons'>delete_forever</i>").click(function(){
        var li = $(this).parent();
        li.fadeOut(function(){
          li.remove();
        });
      });

      team.append(del);
      $("#available").append(team);
        //to clear the input
      $(".txtb").val("");
    }
    $("#add-form").hide();
    $("#openForm").show();
  });


  $("#addProject").on("click",function(){

      var project = $(
        "<div class='card white col sm3 card-content blue-grey-text'><span class='card-title center'><h6>New Project</h6></span><hr><ol id='newProject' class='sort'><li>Jayne Doe<i class='tiny material-icons'id='del'>delete_forever</i></li></ol></div>"
        ).text($(".txtb").val().trim());
      var del = $("<i class='tiny material-icons'>delete_forever</i>").click(function(){
        var card = $(this).parent();
        card.fadeOut(function(){
          card.remove();
        });
      });

      $(".cardRow").append(project);
      project.append(del);
      

  });




}); //end document.ready