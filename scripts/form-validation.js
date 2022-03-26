"use strict";

// == Date Input ==
$("#reservation-input-date").datepicker({
  dateFormat: "dd/mm/yy",
});

// == Time Input ==

$("#reservation-input-time").timepicker({
  timeFormat: "h:mm p",
  interval: 60,
  minTime: "09",
  maxTime: "09:00pm",
  defaultTime: "",
  startTime: "09:00",
  dynamic: false,
  dropdown: false,
  scrollbar: false,
});

const language = document.documentElement.lang;

const resInputName = document.getElementById("reservation-input-name");
const resInputEmail = document.getElementById("reservation-input-email");
const resInputPhone = document.getElementById("reservation-input-phone");
const resInputDate = document.getElementById("reservation-input-date");
const resInputTime = document.getElementById("reservation-input-time");
const resInputGuests = document.getElementById("reservation-input-guests");
const resOverlay = document.getElementById("reservation-overlay");

// Helper functions

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

// == RESERVATION OVERLAY ==

// Open overlay

const openOverlay = function () {
  resOverlay.style.display = "flex";
  // stop from scrolling
};

// Close overlay

const closeOverlay = function () {
  // clear input
  clearValue(resInputName);
  clearValue(resInputEmail);
  clearValue(resInputPhone);
  clearValue(resInputDate);
  clearValue(resInputTime);
  clearValue(resInputGuests);

  // cleat error messages
  clearError(resInputName, language === "en" ? "Full Name" : "Puno Ime");

  clearError(
    resInputEmail,
    language === "en" ? "Email Address" : "Email Adresa"
  );

  clearError(
    resInputPhone,
    language === "en" ? "Phone Number" : "Broj Telefona"
  );

  clearError(
    resInputDate,
    language === "en" ? "Reservation Date" : "Datum Rezervacije"
  );

  clearError(
    resInputTime,
    language === "en" ? "Reservation Time" : "Vreme Rezervacije"
  );

  clearError(
    resInputGuests,
    language === "en" ? "Number Of Guests" : "Broj Gostiju"
  );

  resOverlay.style.display = "none";
  // enable scrolling
};

// == Validate Reservation Form ==

// Clear error message on focus

resInputName.addEventListener("focus", function () {
  clearError(resInputName, language === "en" ? "Full Name" : "Puno Ime");
});

resInputEmail.addEventListener("focus", function () {
  clearError(
    resInputEmail,
    language === "en" ? "Email Address" : "Email Adresa"
  );
});

resInputPhone.addEventListener("focus", function () {
  clearError(
    resInputPhone,
    language === "en" ? "Phone Number" : "Broj Telefona"
  );
});

resInputDate.addEventListener("focus", function () {
  clearError(
    resInputDate,
    language === "en" ? "Reservation Date" : "Datum Rezervacije"
  );
});

resInputTime.addEventListener("focus", function () {
  clearError(
    resInputTime,
    language === "en" ? "Reservation Time" : "Vreme Rezervacije"
  );
});

resInputGuests.addEventListener("focus", function () {
  clearError(
    resInputGuests,
    language === "en" ? "Number Of Guests" : "Broj Gostiju"
  );
});

// Form Validation

const validateReservationForm = function () {
  if (
    resInputName.value &&
    resInputEmail.value &&
    resInputPhone.value &&
    resInputDate.value &&
    resInputTime.value &&
    resInputGuests.value
  ) {
    if (!resInputEmail.value.includes("@")) {
      clearValue(resInputEmail);
      errorMessage(
        resInputEmail,
        language === "en" ? "Invalid Email Address" : "Nevažeća Email Adresa"
      );
    } else {
      // store values in to an object
      const reservation = {
        fullName: resInputName.value,
        email: resInputEmail.value,
        phoneNumber: resInputPhone.value,
        date: resInputDate.value,
        time: resInputTime.value,
        numberOfGuests: resInputGuests.value,
      };

      clearValue(resInputName);
      clearValue(resInputEmail);
      clearValue(resInputPhone);
      clearValue(resInputDate);
      clearValue(resInputTime);
      clearValue(resInputGuests);

      resOverlay.style.display = "none";

      console.log(reservation);
      alert(
        language === "en" ? "Reservation Successful!" : "Uspešna Rezervacija!"
      );
    }
  } else {
    if (!resInputName.value) {
      errorMessage(
        resInputName,
        language === "en" ? "Please Input Your Name" : "Molimo Unesite Vaše Ime"
      );
    }
    if (!resInputEmail.value) {
      errorMessage(
        resInputEmail,
        language === "en"
          ? "Please Input Your Email"
          : "Molimo Unesite Vašu Email Adresu"
      );
    }
    if (!resInputPhone.value) {
      errorMessage(
        resInputPhone,
        language === "en"
          ? "Please Input Your Phone"
          : "Molimo Unesite Vaš Broj Telefona"
      );
    }
    if (!resInputDate.value) {
      errorMessage(
        resInputDate,
        language === "en" ? "Please Input Date" : "Molimo Unesite Datum"
      );
    }
    if (!resInputTime.value) {
      errorMessage(
        resInputTime,
        language === "en" ? "Please Input Time" : "Molimo Unesite Vreme"
      );
    }
    if (!resInputGuests.value) {
      errorMessage(
        resInputGuests,
        language === "en"
          ? "Please Input Number Of Guests"
          : "Molimo Unesite Broj Gostiju"
      );
    }
  }
};

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
