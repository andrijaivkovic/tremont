"use strict";

// == SUBSCRIBE FORM ==

const subscribeInputEmail = document.querySelector("#subscribe-input-email");
const btnSubscribe = document.querySelector(".subscribe-button");

// Clear error message on focus

subscribeInputEmail.addEventListener("focus", function () {
  clearError(
    subscribeInputEmail,
    language === "en" ? "Your Email Address" : "Vaša email adresa"
  );
});

// Form Validation

btnSubscribe.addEventListener("click", function (e) {
  e.preventDefault();
  if (subscribeInputEmail) {
    if (!subscribeInputEmail.value.includes("@")) {
      clearValue(subscribeInputEmail);
      errorMessage(
        subscribeInputEmail,
        language === "en" ? "Invalid Email Address" : "Nevažeća email adresa"
      );
    } else {
      console.log(subscribeInputEmail.value);
      alert(
        language === "en" ? "Subscription Successful!" : "Pretplata uspešna!"
      );

      clearValue(subscribeInputEmail);
    }
  } else {
    if (!subscribeInputEmail.value) {
      errorMessage(
        subscribeInputEmail,
        language === "en"
          ? "Please Input Your Email"
          : "Molimo unesite Vašu email adresu"
      );
    }
  }
});
