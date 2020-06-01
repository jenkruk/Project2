// header space 



$("#add-task-form").hide();

$(".delete").on('click', function(){
  $(this).parent().remove();
});

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