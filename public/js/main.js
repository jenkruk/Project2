var userName;
var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

$(document).ready(function () {

   $("#login-btn").on("click", function (event) {
      event.preventDefault();
      console.log("Inside login button");
      var username= document.getElementById('loginUserName').value
      //  var username = $("#loginUserName").val().trim();
      // var password = $("#loginpassword").val().trim();
      getUser(username);
      // getUser(username, password);
  })

  function getUser(username) {
      
  // function getUser(username, password) {
      // $.get("/api/login/" + username + "/" + password, function (data) {
          $.get("/api/login/" + username, function (data) {
          console.log(data);
          if(data === null)
          alert("Please create an account");
          uniqueUserId = data.id;
          console.log(uniqueUserId);
          window.location = "/" + uniqueUserId;
      })
  }

  $("#blog-submit-btn").on("click", function (event) {
    event.preventDefault();
    console.log("Inside submit button");
  
    var project_name = $("textarea#blogText").val().trim();
    var project_status = $("textarea#blogTitle").val().trim();
    var userId=document.getElementById('loginUserName').value;
    console.log(userId, "userId")
    var newBlog = {
        userId: userId,
        project_name: project_name,
        project_status: project_status
    }

    // Post to blog table
    $.ajax("/api/new/blog", {
        type: "POST",
        data: newBlog
    }).then(function (result) {
        console.log("Inserted into Blog Table");

        // Update user table
        $.ajax("/api/user/update/" + userId, {
            type: "PUT"
        }).then(function () {
            console.log("Updated value to user table")
        })
    })
    location.reload();
})
})
   