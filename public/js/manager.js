// header space 

$("#add-form").hide();
$(".cardFour").hide();

$(".delete").on('click', function(){
  $(this).parent().remove();
});

 $(document).ready(function(){

  $("#dropdownbtn").dropdown()


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

    $(".cardFour").show();
  });

}); //end document.ready