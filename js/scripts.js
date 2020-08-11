$(document).ready(function() {
  $(".clickable-show").click(function() {
    $("#show").slideToggle("slow");
    $("#hide").slideToggle("slow");
  });
  $(".clickable-hide").click(function() {
  $("#show").slideToggle("slow");
  $("#hide").slideToggle("slow");
  });
});