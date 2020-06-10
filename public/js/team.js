// header space 
$("#add-task-form").hide();

$(".delete").on('click', function(){
  $(this).parent().remove();
});

$(document).ready(function(){

$.get("/api/waitingTasks").then(
  function(waiting){
    // console.log(waiting);
    waiting.forEach(function(task){
      var newLi = $("<li>");
      newLi.text(task.task_name);
      $("#waiting").append(newLi);
    });
  }
)

$.get("/api/assignedTasks").then(
  function(assigned){
    // console.log(waiting);
    assigned.forEach(function(task){
      var newLi = $("<li>");
      newLi.text(task.task_name);
      $("#assigned").append(newLi);
    });
  }
)

$.get("/api/activeTasks").then(
  function(active){
    // console.log(active);
    active.forEach(function(task){
      var newLi = $("<li>");
      newLi.text(task.task_name);
      $("#active").append(newLi);
    });
  }
)

$.get("/api/doneTasks").then(
  function(done){
    // console.log(done);
    done.forEach(function(task){
      var newLi = $("<li>");
      var del = $("<i class='tiny material-icons'>delete_forever</i>").click(function(){
        var li = $(this).parent();
        li.fadeOut(function(){
        li.remove();
        });
        });
        newLi.append(task.task_name, del);
        $("#done").append(newLi);
    });
  }
)

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

  $(".plus").on("click", function(event){
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
      $("#waiting").append(task); // the idea of #waiting is assigned to the ol
        //to clear the input
      $(".txtb").val("");
    }
    $("#add-task-form").hide();
    $("#openForm").show();

  }); 
});//end document.ready