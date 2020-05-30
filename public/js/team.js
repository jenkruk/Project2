// header space 

$("#add-task-form").hide();

$(document).ready(function(){

  $("#del").on('click',function() {
    var li = $(this).parent();
    li.fadeOut(function(){
      li.remove();
    });
  });

  $("#openForm").on('click', function() {
    $("#openForm").hide();
    $("#add-task-form").show();
});

  $(".plus").on("click",function(event){
    event.preventDefault();
    if($(".txtb").val() != "")
    {
      var task = $("<li class='task'></li>").text($(".txtb").val().trim());
      var del = $("<i class='tiny material-icons'>delete_forever</i>").click(function(){
        var li = $(this).parent();
        li.fadeOut(function(){
          li.remove();
        });
      });

      task.append(del);
      $("#waiting").append(task);
        //to clear the input
      $(".txtb").val("");
    }
    $("#add-task-form").hide();
    $("#openForm").show();

    // Make a newTask object
    var newTask = {
      task_name: task,
      status: ("waiting")
    }

  // Send an AJAX POST-request with jQuery
    $.post("/api/tasks/", newTask)
    // On success, run the following code
    .then(function(data){
      //log the data we found
      console.log(data);
    });

  });

}); //end document.ready