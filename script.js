$(document).ready(function(){
  $("#nav").click(function(){
    $(".col-6 col-sm-3 list-inline-item ui-menu-color-home menuitem").slideToggle("slow");
  });
});

$("#nav").css("color", "blue"); // colors the text blue
$("li:first").css("color", "green");

