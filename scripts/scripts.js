"use strict";

// Helper functions and variables

// Variables

const language = document.documentElement.lang;

// Functions

let clearValue = function (element) {
  element.value = "";
};

let errorMessage = function (element, text) {
  element.placeholder = text;
  element.style.borderColor = "#ff6961";
  element.classList.add("red-placeholder");
};

let clearError = function (element, text) {
  element.placeholder = text;
  element.style.borderColor = "white";
  element.classList.remove("red-placeholder");
};

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

    // STOP USER FROM SCROLLING
    $("html, body").css({
      overflow: "hidden",
      height: "100%",
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

    // ENABLE SCROLLING
    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });
  }
}

// == MENUS ==

const japaneseContainer = $(".menus-container-japanese");
const japaneseSelect = $(".menu-select-text-japanese");
// const btnJapanese = $(".menu-select-item-japanese");
const westernContainer = $(".menus-container-western");
const westernSelect = $(".menu-select-text-western");
// const btnWestern = $(".menu-select-item-western");
const koreanContainer = $(".menus-container-korean");
const koreanSelect = $(".menu-select-text-korean");
// const btnKorean = $(".menu-select-item-korean");

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

    // removeClass(btnWestern, "line");
    // removeClass(btnKorean, "line");

    addClass(westernContainer, "menu-hidden");
    addClass(koreanContainer, "menu-hidden");

    changeAttribute(japaneseContainer, "data-visible", "shown");
    removeClass(japaneseContainer, "menu-hidden");
    addClass(japaneseContainer, "menu-shown");
    addClass(japaneseSelect, "active");
    // addClass(btnJapanese, "line");
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

    // removeClass(btnJapanese, "line");
    // removeClass(btnKorean, "line");

    addClass(japaneseContainer, "menu-hidden");
    addClass(koreanContainer, "menu-hidden");

    changeAttribute(westernContainer, "data-visible", "shown");
    removeClass(westernContainer, "menu-hidden");
    addClass(westernContainer, "menu-shown");
    addClass(westernSelect, "active");
    // addClass(btnWestern, "line");
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

    // removeClass(btnJapanese, "line");
    // removeClass(btnWestern, "line");

    addClass(japaneseContainer, "menu-hidden");
    addClass(westernContainer, "menu-hidden");

    changeAttribute(koreanContainer, "data-visible", "shown");
    removeClass(koreanContainer, "menu-hidden");
    addClass(koreanContainer, "menu-shown");
    addClass(koreanSelect, "active");
    // addClass(btnKorean, "line");
  }
};
