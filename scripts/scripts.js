// == HIDE NAVBAR ==

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#nav").css({ top: "0px" });
  } else {
    $("#nav").css({ top: "-100px" });
  }
  prevScrollpos = currentScrollPos;
};

// == MOBILE NAV ==

function mobileNav() {
  var visibility1 = $(".rectangle-1").attr("data-visible");
  var visibility2 = $(".rectangle-2").attr("data-visible");
  var visibility3 = $(".mobile-nav-text").attr("data-visible");

  if (
    visibility1 === "slided" &&
    visibility2 === "slided" &&
    visibility3 === "faded"
  ) {
    $(".rectangle-1").attr("data-visible", "unslided");
    $(".rectangle-2").attr("data-visible", "unslided");
    $(".mobile-nav-text").attr("data-visible", "unfaded");

    $(".rectangle-1").removeClass("unslided");
    $(".rectangle-2").removeClass("unslided");
    $(".mobile-nav-text").removeClass("fadeInUp");
    $(".mobile-nav-background").removeClass("shown");

    $(".rectangle-1").addClass("slided-left");
    $(".rectangle-2").addClass("slided-right");
    $(".mobile-nav-text").addClass("unfadeInUp");
    $(".mobile-nav-background").addClass("hidden");

    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });
  } else {
    $(".rectangle-1").attr("data-visible", "slided");
    $(".rectangle-2").attr("data-visible", "slided");
    $(".mobile-nav-text").attr("data-visible", "faded");

    $(".rectangle-1").removeClass("slided-left");
    $(".rectangle-2").removeClass("slided-right");
    $(".mobile-nav-text").removeClass("unfadeInUp");
    $(".mobile-nav-background").removeClass("hidden");

    $(".rectangle-1").addClass("unslided");
    $(".rectangle-2").addClass("unslided");
    $(".mobile-nav-text").addClass("fadeInUp");
    $(".mobile-nav-background").addClass("shown");

    $("html, body").css({
      overflow: "hidden",
      height: "100%",
    });
  }
}

// == MENUS ==

function japaneseMenu() {
  var vis2 = $(".menus-container-middle-eastern").attr("data-visible");
  var vis3 = $(".menus-container-western").attr("data-visible");
  var vis4 = $(".menus-container-korean").attr("data-visible");

  if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
    $(".menus-container-middle-eastern").attr("data-visible", "hidden");
    $(".menus-container-western").attr("data-visible", "hidden");
    $(".menus-container-korean").attr("data-visible", "hidden");

    $(".menus-container-middle-eastern").removeClass("menu-shown");
    $(".menus-container-western").removeClass("menu-shown");
    $(".menus-container-korean").removeClass("menu-shown");

    $(".menu-select-item-middle-eastern").removeClass("active");
    $(".menu-select-item-western").removeClass("active");
    $(".menu-select-item-korean").removeClass("active");

    $(".menus-container-middle-eastern").addClass("menu-hidden");
    $(".menus-container-western").addClass("menu-hidden");
    $(".menus-container-korean").addClass("menu-hidden");

    $(".menus-container-japanese").attr("data-visible", "shown");
    $(".menus-container-japanese").removeClass("menu-hidden");
    $(".menus-container-japanese").addClass("menu-shown");
    $(".menu-select-item-japanese").addClass("active");
  }
}

// function middleEasternMenu() {
//   var vis2 = $(".menus-container-japanese").attr("data-visible");
//   var vis3 = $(".menus-container-western").attr("data-visible");
//   var vis4 = $(".menus-container-korean").attr("data-visible");

//   if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
//     $(".menus-container-japanese").attr("data-visible", "hidden");
//     $(".menus-container-western").attr("data-visible", "hidden");
//     $(".menus-container-korean").attr("data-visible", "hidden");

//     $(".menus-container-japanese").removeClass("menu-shown");
//     $(".menus-container-western").removeClass("menu-shown");
//     $(".menus-container-korean").removeClass("menu-shown");

//     $(".menu-select-item-japanese").removeClass("active");
//     $(".menu-select-item-western").removeClass("active");
//     $(".menu-select-item-korean").removeClass("active");

//     $(".menus-container-japanese").addClass("menu-hidden");
//     $(".menus-container-western").addClass("menu-hidden");
//     $(".menus-container-korean").addClass("menu-hidden");

//     $(".menus-container-middle-eastern").attr("data-visible", "shown");
//     $(".menus-container-middle-eastern").removeClass("menu-hidden");
//     $(".menus-container-middle-eastern").addClass("menu-shown");
//     $(".menu-select-item-middle-eastern").addClass("active");
//   }
// }

function westernMenu() {
  var vis2 = $(".menus-container-japanese").attr("data-visible");
  var vis3 = $(".menus-container-middle-eastern").attr("data-visible");
  var vis4 = $(".menus-container-korean").attr("data-visible");

  if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
    $(".menus-container-japanese").attr("data-visible", "hidden");
    $(".menus-container-middle-eastern").attr("data-visible", "hidden");
    $(".menus-container-korean").attr("data-visible", "hidden");

    $(".menus-container-japanese").removeClass("menu-shown");
    $(".menus-container-middle-eastern").removeClass("menu-shown");
    $(".menus-container-korean").removeClass("menu-shown");

    $(".menu-select-item-japanese").removeClass("active");
    $(".menu-select-item-middle-eastern").removeClass("active");
    $(".menu-select-item-korean").removeClass("active");

    $(".menus-container-japanese").addClass("menu-hidden");
    $(".menus-container-middle-eastern").addClass("menu-hidden");
    $(".menus-container-korean").addClass("menu-hidden");

    $(".menus-container-western").attr("data-visible", "shown");
    $(".menus-container-western").removeClass("menu-hidden");
    $(".menus-container-western").addClass("menu-shown");
    $(".menu-select-item-western").addClass("active");
  }
}

function koreanMenu() {
  var vis2 = $(".menus-container-japanese").attr("data-visible");
  var vis3 = $(".menus-container-middle-eastern").attr("data-visible");
  var vis4 = $(".menus-container-western").attr("data-visible");

  if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
    $(".menus-container-japanese").attr("data-visible", "hidden");
    $(".menus-container-middle-eastern").attr("data-visible", "hidden");
    $(".menus-container-western").attr("data-visible", "hidden");

    $(".menus-container-japanese").removeClass("menu-shown");
    $(".menus-container-middle-eastern").removeClass("menu-shown");
    $(".menus-container-western").removeClass("menu-shown");

    $(".menu-select-item-japanese").removeClass("active");
    $(".menu-select-item-middle-eastern").removeClass("active");
    $(".menu-select-item-western").removeClass("active");

    $(".menus-container-japanese").addClass("menu-hidden");
    $(".menus-container-middle-eastern").addClass("menu-hidden");
    $(".menus-container-western").addClass("menu-hidden");

    $(".menus-container-korean").attr("data-visible", "shown");
    $(".menus-container-korean").removeClass("menu-hidden");
    $(".menus-container-korean").addClass("menu-shown");
    $(".menu-select-item-korean").addClass("active");
  }
}
