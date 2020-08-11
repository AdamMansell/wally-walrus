$(document).ready(function() {
  $(".clickable-show").click(function() {
    $("#show").slideToggle("slow");
    $("#hide").slideToggle("slow");
  });
  $(".clickable-hide").click(function() {
  $("#show").slideToggle("slow");
  $("#hide").slideToggle("slow");
  });

  $(".clickable-showSit").click(function() {
    $("#show-sit").slideToggle("slow");
    $("#hide-sit").slideToggle("slow");
  });
  $(".clickable-hideSit").click(function() {
  $("#show-sit").slideToggle("slow");
  $("#hide-sit").slideToggle("slow");
  });
});