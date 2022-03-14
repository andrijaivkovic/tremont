"use strict";

// == HIDE NAVBAR ==

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#nav").css({ top: "0px" });
  } else {
    $("#nav").css({ top: "-100px" });
  }
  prevScrollpos = currentScrollPos;
};

// == MOBILE NAV ==

const addClass = function (elementName, className) {
  elementName.addClass(className);
};

const removeClass = function (elementName, className) {
  elementName.removeClass(className);
};

const changeAttribute = function (elementName, attributeName, attributeValue) {
  elementName.attr(attributeName, attributeValue);
};

const getAttribute = function (elementName, attributeName) {
  return elementName.attr(attributeName);
};

const recLeft = $(".rectangle-left");
const recRight = $(".rectangle-right");
const navText = $(".mobile-nav-text");
const navBkg = $(".mobile-nav-background");

function mobileNav() {
  let vis1 = getAttribute(recLeft, "data-visible");
  let vis2 = getAttribute(recRight, "data-visible");
  let vis3 = getAttribute(navText, "data-visible");

  if (vis1 === "slided" && vis2 === "slided" && vis3 === "faded") {
    changeAttribute(recLeft, "data-visible", "unslided");
    changeAttribute(recRight, "data-visible", "unslided");
    changeAttribute(navText, "data-visible", "unfaded");

    removeClass(recLeft, "slided-up");
    removeClass(recRight, "slided-down");
    removeClass(navText, "unfadeInUp");
    removeClass(navBkg, "hidden");

    addClass(recLeft, "unslided");
    addClass(recRight, "unslided");
    addClass(navText, "fadeInUp");
    addClass(navBkg, "shown");

    // ENABLE SCROLLING

    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });
  } else {
    changeAttribute(recLeft, "data-visible", "slided");
    changeAttribute(recRight, "data-visible", "slided");
    changeAttribute(navText, "data-visible", "faded");

    removeClass(recLeft, "unslided");
    removeClass(recRight, "unslided");
    removeClass(navText, "fadeInUp");
    removeClass(navBkg, "shown");

    addClass(recLeft, "slided-up");
    addClass(recRight, "slided-down");
    addClass(navText, "unfadeInUp");
    addClass(navBkg, "hidden");

    // STOP USER FROM SCROLLING

    $("html, body").css({
      overflow: "hidden",
      height: "100%",
    });
  }
}

// == MENUS ==

const japaneseContainer = $(".menus-container-japanese");
const japaneseSelect = $(".menu-select-item-japanese");
const westernContainer = $(".menus-container-western");
const westernSelect = $(".menu-select-item-western");
const koreanContainer = $(".menus-container-korean");
const koreanSelect = $(".menu-select-item-korean");

const japaneseMenu = function () {
  let vis1 = getAttribute(westernContainer, "data-visible");
  let vis2 = getAttribute(koreanContainer, "data-visible");

  if (vis1 === "shown" || vis2 === "shown") {
    changeAttribute(westernContainer, "data-visible", "hidden");
    changeAttribute(koreanContainer, "data-visible", "hidden");

    removeClass(westernContainer, "menu-shown");
    removeClass(koreanContainer, "menu-shown");

    removeClass(westernSelect, "active");
    removeClass(koreanSelect, "active");

    addClass(westernContainer, "menu-hidden");
    addClass(koreanContainer, "menu-hidden");

    changeAttribute(japaneseContainer, "data-visible", "shown");
    removeClass(japaneseContainer, "menu-hidden");
    addClass(japaneseContainer, "menu-shown");
    addClass(japaneseSelect, "active");
  }
};

const westernMenu = function () {
  let vis1 = getAttribute(japaneseContainer, "data-visible");
  let vis2 = getAttribute(koreanContainer, "data-visible");

  if (vis1 === "shown" || vis2 === "shown") {
    changeAttribute(japaneseContainer, "data-visible", "hidden");
    changeAttribute(koreanContainer, "data-visible", "hidden");

    removeClass(japaneseContainer, "menu-shown");
    removeClass(koreanContainer, "menu-shown");

    removeClass(japaneseSelect, "active");
    removeClass(koreanSelect, "active");

    addClass(japaneseContainer, "menu-hidden");
    addClass(koreanContainer, "menu-hidden");

    changeAttribute(westernContainer, "data-visible", "shown");
    removeClass(westernContainer, "menu-hidden");
    addClass(westernContainer, "menu-shown");
    addClass(westernSelect, "active");
  }
};

const koreanMenu = function () {
  let vis1 = getAttribute(japaneseContainer, "data-visible");
  let vis2 = getAttribute(westernContainer, "data-visible");

  if (vis1 === "shown" || vis2 === "shown") {
    changeAttribute(japaneseContainer, "data-visible", "hidden");
    changeAttribute(westernContainer, "data-visible", "hidden");

    removeClass(japaneseContainer, "menu-shown");
    removeClass(westernContainer, "menu-shown");

    removeClass(japaneseSelect, "active");
    removeClass(westernSelect, "active");

    addClass(japaneseContainer, "menu-hidden");
    addClass(westernContainer, "menu-hidden");

    changeAttribute(koreanContainer, "data-visible", "shown");
    removeClass(koreanContainer, "menu-hidden");
    addClass(koreanContainer, "menu-shown");
    addClass(koreanSelect, "active");
  }
};
