"use strict";

// == MENUS ==

const japaneseContainer = document.querySelector(".menus-container-japanese");
const westernContainer = document.querySelector(".menus-container-western");
const koreanContainer = document.querySelector(".menus-container-korean");

const japaneseSelect = document.querySelector(".menu-select-text-japanese");
const westernSelect = document.querySelector(".menu-select-text-western");
const koreanSelect = document.querySelector(".menu-select-text-korean");

const btnJapanese = document.querySelector(".menu-select-item-japanese");
const btnWestern = document.querySelector(".menu-select-item-western");
const btnKorean = document.querySelector(".menu-select-item-korean");

btnJapanese.addEventListener("click", function () {
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
});

btnWestern.addEventListener("click", function () {
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
});

btnKorean.addEventListener("click", function () {
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
});
