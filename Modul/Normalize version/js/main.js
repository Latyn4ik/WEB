$(".cub").mouseenter(function () {
  $(".t1").css("visibility", "visible");
  $(".t2").css("visibility", "visible");
});

$(".cub").mouseleave(function () {
  $(".t1").addClass("t1_func");
  $(".t2").addClass("t2_func");
});