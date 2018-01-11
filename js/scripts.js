$(document).ready(function() {
  $("h2.monkey").click(function() {
      $("h2.monkey").hide();
      $("p.monkey").fadeToggle();
      $("img.monkey").fadeToggle();
    });
$("p.monkey").click(function() {
  $("p.monkey").hide();
  $("h2.monkey").show();
  $("img.monkey").fadeToggle();
});
$("h2.bird").click(function() {
  $("h2.bird").hide();
  $("p.bird").fadeToggle();
  $("img.bird").fadeToggle();
});
$("p.bird").click(function() {
  $("p.bird").hide();
  $("h2.bird").show();
  $("img.bird").fadeToggle();
});
$("h2.horse").click(function() {
  $("h2.horse").hide();
  $("p.horse").fadeToggle();
  $("img.horse").fadeToggle();
});
$("p.horse").click(function() {
  $("p.horse").hide();
  $("h2.horse").show();
  $("img.horse").fadeToggle();
});
});
