//importing scss file
import "./scss/main.scss";

//import font awesome icons
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/regular";

import $ from "jquery";

$(document).ready(function () {
  $(".link")
    .not(":last-of-type")
    .on("click", function () {
      $("a").removeClass("active");
      $(".panel").addClass("panel_unactive");
      $(this).addClass("active");
      var panel = $(this).attr("id");
      $("#panel_" + panel).removeClass("panel_unactive");
    });

  $(".filter li").on("click", function () {
    $(".filter li").removeClass("active");
    var thisClass = $(this).attr("class");
    $(this).addClass("active");
    $(".project").hide();
    if (thisClass === "all") {
      $(".project").show(500);
    } else {
      $(".project_" + thisClass).show(500);
    }
  });
});
