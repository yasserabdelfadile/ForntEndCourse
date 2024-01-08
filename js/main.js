// start slider height
$(function () {
  "use strict";
  var windoH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(windoH - (upperH + navH));

  // end slider

  // Featured-work shuffle
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === "all") {
      $(".shuffle .col-md").css("opacity", 1);
    } else {
      $(".shuffle .col-md").css("opacity", "0.05");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
  // end
});
