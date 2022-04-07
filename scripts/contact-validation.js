"use strict";

// == MESSAGE FORM ==

const messageInputName = document.getElementById("message-input-name");
const messageInputPhone = document.getElementById("message-input-phone");
const messageInputEmail = document.getElementById("message-input-email");
const messageInputText = document.getElementById("message-input-text");

const btnContact = document.querySelector(".contact-button");

// Clear error message on focus

messageInputName.addEventListener("focus", function () {
  clearError(
    messageInputName,
    language === "en" ? "Full Name" : "Ime i prezime"
  );
});

messageInputEmail.addEventListener("focus", function () {
  clearError(
    messageInputEmail,
    language === "en" ? "Email Address" : "Email adresa"
  );
});

messageInputPhone.addEventListener("focus", function () {
  clearError(
    messageInputPhone,
    language === "en" ? "Phone Number" : "Broj telefona"
  );
});

messageInputText.addEventListener("focus", function () {
  clearError(
    messageInputText,
    language === "en" ? "Your Message" : "Vaša poruka"
  );
});

// Form Validation

btnContact.addEventListener("click", function (e) {
  e.preventDefault();
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
        language === "en" ? "Invalid Email Address" : "Nevažeća email adresa"
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
      alert(language === "en" ? "Message Sent!" : "Poruka poslata!");
    }
  } else {
    if (!messageInputName.value) {
      errorMessage(
        messageInputName,
        language === "en"
          ? "Please Input Your Name"
          : "Molimo unesite Vaše ime i prezime"
      );
    }
    if (!messageInputEmail.value) {
      errorMessage(
        messageInputEmail,
        language === "en"
          ? "Please Input Your Email"
          : "Molimo unesite Vašu email adresu"
      );
    }
    if (!messageInputPhone.value) {
      errorMessage(
        messageInputPhone,
        language === "en"
          ? "Please Input Your Phone"
          : "Molimo unesite Vaš broj telefona"
      );
    }
    if (!messageInputText.value) {
      errorMessage(
        messageInputText,
        language === "en"
          ? "Please Input Message Text"
          : "Molimo unesite tekst poruke"
      );
    }
  }
});
