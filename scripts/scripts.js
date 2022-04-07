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
  elementName.classList.add(className);
};

const removeClass = function (elementName, className) {
  elementName.classList.remove(className);
};

const changeAttribute = function (elementName, attributeName, attributeValue) {
  elementName.setAttribute(attributeName, attributeValue);
};

const getAttribute = function (elementName, attributeName) {
  return elementName.getAttribute(attributeName);
};

// == HIDE NAVBAR ==

const navBar = document.querySelector("#nav");

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0px";
  } else {
    navBar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// == MOBILE NAV ==

const html = document.querySelector("html");
const body = document.querySelector("body");

const recLeft = document.querySelector(".rectangle-left");
const recRight = document.querySelector(".rectangle-right");
const navText = document.querySelector(".mobile-nav-text");
const navBkg = document.querySelector(".mobile-nav-background");
const btnMobileNav = document.querySelector("#mobile-nav-toggle");

btnMobileNav.addEventListener("click", function () {
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

    html.style.overflow = "hidden";
    html.style.height = "100%";
    body.style.overflow = "hidden";
    body.style.height = "100%";
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

    html.style.overflow = "auto";
    html.style.height = "auto";
    body.style.overflow = "auto";
    body.style.height = "auto";
  }
});
