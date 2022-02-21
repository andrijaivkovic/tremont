// // DEBOUNCE FUNCTION

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function(){
//     var context = this,
//     args = arguments;
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       timeout = null;
//       if (!immediate) {
//         func.apply(context, args);
//       }
//     }, wait);
//     if (callNow) func.apply(context, args);
//   }
// }

// // SCROLL-LINKED ANIMATION, GOES DOWN

// function scrollEffectPrimary() {

//   $(window).scroll(function(){
//       var scrollPos = $(document).scrollTop();

//       var $item = $(".scroll-animation-primary");
//       $($item).css("transform","translateY(" +  (scrollPos/12)  + "px)");
//   });

//   }

//   // SCROLL-LINKED ANIMATION, GOES UP

//   function scrollEffectSecondary(){

//   $(window).scroll(function(){
//       var scrollPos = $(document).scrollTop();

//       var $item = $(".scroll-animation-secondary");
//       $($item).css("transform","translateY(-" +  (scrollPos/7)  + "px)");
//   });

//   }

// // PASSES SCROLL-LINKED ANIMATIONS TO BE DEBOUNCED

// var debouncedScrollPrimary = debounce(scrollEffectPrimary, 50);
// var debouncedScrollSecondary = debounce(scrollEffectSecondary, 50);

// // CALLS DEBOUNCE ON SCROLL FOR SCROLL-LINKED ANIMATIONS

// document.addEventListener('scroll', debouncedScrollPrimary)
// document.addEventListener('scroll', debouncedScrollSecondary)

// // WAYPOINTS

// // REVEAL ANIMACTION HORIZONTAL

// $(document).ready(function() {
//   $(document).scroll(function(evt) {
//     if ($(this).scrollTop() >= $('.reveal-horizontal').position().top - $(window).height() / 22) {
//       $('.reveal-horizontal').addClass('animated-reveal-horizontal')
//     }
//   });
// });

// // REVEAL ANIMACTION VERTICAL

// // $(document).ready(function() {
// //   $(document).scroll(function(evt) {
// //     if ($(this).scrollTop() >= $('.reveal-vertical').position().top - $(window).height() / 22) {
// //       $('.reveal-vertical').addClass('animated-reveal-vertical')
// //     }
// //   });
// // });

// // // FADE-IN-UP 1ST ELEMENT

// $(document).ready(function() {
//   $(document).scroll(function(evt) {
//     if ($(this).scrollTop() >= $('.fadeInUp-1st').position().top - $(window).height() / 22) {
//       $('.fadeInUp-1st').addClass('animated-fadeInUp')
//     }
//   });
// });

// // FADE-IN-UP 2ND ELEMENT

// $(document).ready(function() {
//   $(document).scroll(function(evt) {
//     if ($(this).scrollTop() >= $('.fadeInUp-2nd').position().top - $(window).height() / 22) {
//       $('.fadeInUp-2nd').addClass('animated-fadeInUp')
//     }
//   });
// });

// == HIDE NAVBAR ==

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
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

function japaneseMenu() {
  var vis2 = $(".menus-container-middle-eastern").attr("data-visible");
  var vis3 = $(".menus-container-western").attr("data-visible");
  var vis4 = $(".menus-container-korean").attr("data-visible");

  if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
    $(".menus-container-middle-eastern").attr("data-visible", "hidden");
    $(".menus-container-western").attr("data-visible", "hidden");
    $(".menus-container-korean").attr("data-visible", "hidden");

    $(".menus-container-middle-eastern").removeClass("display-block");
    $(".menus-container-western").removeClass("display-block");
    $(".menus-container-korean").removeClass("display-block");

    $(".menu-select-item-middle-eastern").removeClass("active");
    $(".menu-select-item-western").removeClass("active");
    $(".menu-select-item-korean").removeClass("active");

    $(".menus-container-middle-eastern").addClass("display-none");
    $(".menus-container-western").addClass("display-none");
    $(".menus-container-korean").addClass("display-none");

    $(".menus-container-japanese").attr("data-visible", "shown");
    $(".menus-container-japanese").removeClass("display-none");
    $(".menus-container-japanese").addClass("display-block");
    $(".menu-select-item-japanese").addClass("active");
  }
}

function middleEasternMenu() {
  var vis2 = $(".menus-container-japanese").attr("data-visible");
  var vis3 = $(".menus-container-western").attr("data-visible");
  var vis4 = $(".menus-container-korean").attr("data-visible");

  if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
    $(".menus-container-japanese").attr("data-visible", "hidden");
    $(".menus-container-western").attr("data-visible", "hidden");
    $(".menus-container-korean").attr("data-visible", "hidden");

    $(".menus-container-japanese").removeClass("display-block");
    $(".menus-container-western").removeClass("display-block");
    $(".menus-container-korean").removeClass("display-block");

    $(".menu-select-item-japanese").removeClass("active");
    $(".menu-select-item-western").removeClass("active");
    $(".menu-select-item-korean").removeClass("active");

    $(".menus-container-japanese").addClass("display-none");
    $(".menus-container-western").addClass("display-none");
    $(".menus-container-korean").addClass("display-none");

    $(".menus-container-middle-eastern").attr("data-visible", "shown");
    $(".menus-container-middle-eastern").removeClass("display-none");
    $(".menus-container-middle-eastern").addClass("display-block");
    $(".menu-select-item-middle-eastern").addClass("active");
  }
}

function westernMenu() {
  var vis2 = $(".menus-container-japanese").attr("data-visible");
  var vis3 = $(".menus-container-middle-eastern").attr("data-visible");
  var vis4 = $(".menus-container-korean").attr("data-visible");

  if (vis2 === "shown" || vis3 === "shown" || vis4 === "shown") {
    $(".menus-container-japanese").attr("data-visible", "hidden");
    $(".menus-container-middle-eastern").attr("data-visible", "hidden");
    $(".menus-container-korean").attr("data-visible", "hidden");

    $(".menus-container-japanese").removeClass("display-block");
    $(".menus-container-middle-eastern").removeClass("display-block");
    $(".menus-container-korean").removeClass("display-block");

    $(".menu-select-item-japanese").removeClass("active");
    $(".menu-select-item-middle-eastern").removeClass("active");
    $(".menu-select-item-korean").removeClass("active");

    $(".menus-container-japanese").addClass("display-none");
    $(".menus-container-middle-eastern").addClass("display-none");
    $(".menus-container-korean").addClass("display-none");

    $(".menus-container-western").attr("data-visible", "shown");
    $(".menus-container-western").removeClass("display-none");
    $(".menus-container-western").addClass("display-block");
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

    $(".menus-container-japanese").removeClass("display-block");
    $(".menus-container-middle-eastern").removeClass("display-block");
    $(".menus-container-western").removeClass("display-block");

    $(".menu-select-item-japanese").removeClass("active");
    $(".menu-select-item-middle-eastern").removeClass("active");
    $(".menu-select-item-western").removeClass("active");

    $(".menus-container-japanese").addClass("display-none");
    $(".menus-container-middle-eastern").addClass("display-none");
    $(".menus-container-western").addClass("display-none");

    $(".menus-container-korean").attr("data-visible", "shown");
    $(".menus-container-korean").removeClass("display-none");
    $(".menus-container-korean").addClass("display-block");
    $(".menu-select-item-korean").addClass("active");
  }
}
