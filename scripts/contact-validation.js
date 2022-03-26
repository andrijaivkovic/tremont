"use strict";

// == MESSAGE FORM ==

const messageInputName = document.getElementById("message-input-name");
const messageInputPhone = document.getElementById("message-input-phone");
const messageInputEmail = document.getElementById("message-input-email");
const messageInputText = document.getElementById("message-input-text");

// Clear error message on focus

messageInputName.addEventListener("focus", function () {
  clearError(messageInputName, language === "en" ? "Full Name" : "Puno Ime");
});

messageInputEmail.addEventListener("focus", function () {
  clearError(
    messageInputEmail,
    language === "en" ? "Email Address" : "Email Adresa"
  );
});

messageInputPhone.addEventListener("focus", function () {
  clearError(
    messageInputPhone,
    language === "en" ? "Phone Number" : "Broj Telefona"
  );
});

messageInputText.addEventListener("focus", function () {
  clearError(
    messageInputText,
    language === "en" ? "Your Message" : "Vaša Poruka"
  );
});

// Form Validation

const validateMessageForm = function () {
  if (
    messageInputName.value &&
    messageInputEmail.value &&
    messageInputPhone.value &&
    messageInputText.value
  ) {
    if (!messageInputEmail.value.includes("@")) {
      clearValue(messageInputEmail);
      errorMessage(
        messageInputEmail,
        language === "en" ? "Invalid Email Address" : "Nevažeća Email Adresa"
      );
    } else {
      // store values in to an object
      const message = {
        fullName: messageInputName.value,
        email: messageInputEmail.value,
        phoneNumber: messageInputPhone.value,
        text: messageInputText.value,
      };

      clearValue(messageInputName);
      clearValue(messageInputEmail);
      clearValue(messageInputPhone);
      clearValue(messageInputText);

      console.log(message);
      alert(language === "en" ? "Message Sent!" : "Poruka Poslata!");
    }
  } else {
    if (!messageInputName.value) {
      errorMessage(
        messageInputName,
        language === "en" ? "Please Input Your Name" : "Molimo Unesite Vaše Ime"
      );
    }
    if (!messageInputEmail.value) {
      errorMessage(
        messageInputEmail,
        language === "en"
          ? "Please Input Your Email"
          : "Molimo Unesite Vaš Email"
      );
    }
    if (!messageInputPhone.value) {
      errorMessage(
        messageInputPhone,
        language === "en"
          ? "Please Input Your Phone"
          : "Molimo Unesite Vaš Broj Telefona"
      );
    }
    if (!messageInputText.value) {
      errorMessage(
        messageInputText,
        language === "en"
          ? "Please Input Message Text"
          : "Molimo Unesite Tekst Poruke"
      );
    }
  }
};
