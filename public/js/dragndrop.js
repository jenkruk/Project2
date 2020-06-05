// head space 


$(document).ready(function() { 

    // for team member page
    $( "#waiting, #assigned, #active, #done" ).sortable({
        connectWith: ".sort",
        dropOnEmpty: false
    });

    // for project manager page
    $( "#available, #project1, #project2, #project3, #project4").sortable({
        connectWith: ".sort",
        dropOnEmpty: false
      });

})
