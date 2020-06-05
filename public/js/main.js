var userName;
var userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

$(document).ready(function () {

   $("#login-btn").on("click", function (event) {
      event.preventDefault();
      console.log("Inside login button");
      var username= document.getElementById('loginUserName').value
      getUser(username);
  })

  function getUser(username) {
    $.get("/api/login/" + username, function (data) {
    console.log(data);
    if(data === null);
    alert("Please create an account");
    uniqueUserId = data.id;
    console.log(uniqueUserId);
    window.location = "/" + uniqueUserId;
    });
  };
})