"use strict";

// // Helper functions

// let clearValue = function (element) {
//   element.value = "";
// };

// let errorMessage = function (element, text) {
//   element.placeholder = text;
//   element.style.borderColor = "#ff6961";
//   element.classList.add("red-placeholder");
// };

// let clearError = function (element, text) {
//   element.placeholder = text;
//   element.style.borderColor = "white";
//   element.classList.remove("red-placeholder");
// };

// == SUBSCRIBE FORM ==

const subscribeInputEmail = document.getElementById("subscribe-input-email");

// Clear error message on focus

subscribeInputEmail.addEventListener("focus", function () {
  clearError(
    subscribeInputEmail,
    language === "en" ? "Your Email Address" : "Vaša Email Adresa"
  );
});

// Form Validation

const validateSubscribeForm = function () {
  if (subscribeInputEmail) {
    if (!subscribeInputEmail.value.includes("@")) {
      clearValue(subscribeInputEmail);
      errorMessage(
        subscribeInputEmail,
        language === "en" ? "Invalid Email Address" : "Nevažeća Email Adresa"
      );
    } else {
      console.log(subscribeInputEmail.value);
      alert(
        language === "en" ? "Subscription Successful!" : "Pretplata Uspešna!"
      );

      clearValue(subscribeInputEmail);
    }
  } else {
    if (!subscribeInputEmail.value) {
      errorMessage(
        subscribeInputEmail,
        language === "en"
          ? "Please Input Your Email"
          : "Molimo Unesite Vašu Email Adresu"
      );
    }
  }
};
