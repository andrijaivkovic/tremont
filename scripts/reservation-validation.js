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

const resInputName = document.querySelector("#reservation-input-name");
const resInputEmail = document.querySelector("#reservation-input-email");
const resInputPhone = document.querySelector("#reservation-input-phone");
const resInputDate = document.querySelector("#reservation-input-date");
const resInputTime = document.querySelector("#reservation-input-time");
const resInputGuests = document.querySelector("#reservation-input-guests");
const resOverlay = document.querySelector("#reservation-overlay");

const btnOverlay = document.querySelector(".hero-button");
const btnReservation = document.querySelector(".overlay-button");

const overlayBackground = document.querySelector(".overlay-background");
const overlayClose = document.querySelector(".overlay-close");

// == RESERVATION OVERLAY ==

// Open overlay

const openOverlay = function () {
  resOverlay.style.display = "flex";
  // TODO stop from scrolling
};

btnOverlay.addEventListener("click", function (e) {
  // Preventing the default behavior
  e.preventDefault();
  // Open the reservation overlay
  openOverlay();
});

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
  clearError(resInputName, language === "en" ? "Full Name" : "Ime i prezime");

  clearError(
    resInputEmail,
    language === "en" ? "Email Address" : "Email adresa"
  );

  clearError(
    resInputPhone,
    language === "en" ? "Phone Number" : "Broj telefona"
  );

  clearError(
    resInputDate,
    language === "en" ? "Reservation Date" : "Datum rezervacije"
  );

  clearError(
    resInputTime,
    language === "en" ? "Reservation Time" : "Vreme rezervacije"
  );

  clearError(
    resInputGuests,
    language === "en" ? "Number Of Guests" : "Broj gostiju"
  );

  resOverlay.style.display = "none";
  // TODO enable scrolling
};

const closeOverlayArr = [overlayBackground, overlayClose];
closeOverlayArr.forEach((el) => el.addEventListener("click", closeOverlay));

// == Validate Reservation Form ==

// Clear error message on focus

resInputName.addEventListener("focus", function () {
  clearError(resInputName, language === "en" ? "Full Name" : "Ime i prezime");
});

resInputEmail.addEventListener("focus", function () {
  clearError(
    resInputEmail,
    language === "en" ? "Email Address" : "Email adresa"
  );
});

resInputPhone.addEventListener("focus", function () {
  clearError(
    resInputPhone,
    language === "en" ? "Phone Number" : "Broj telefona"
  );
});

resInputDate.addEventListener("focus", function () {
  clearError(
    resInputDate,
    language === "en" ? "Reservation Date" : "Datum rezervacije"
  );
});

resInputTime.addEventListener("focus", function () {
  clearError(
    resInputTime,
    language === "en" ? "Reservation Time" : "Vreme rezervacije"
  );
});

resInputGuests.addEventListener("focus", function () {
  clearError(
    resInputGuests,
    language === "en" ? "Number Of Guests" : "Broj gostiju"
  );
});

// Form Validation

btnReservation.addEventListener("click", function (e) {
  e.preventDefault();
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
        language === "en" ? "Invalid Email Address" : "Nevažeća email adresa"
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
        language === "en" ? "Reservation Successful!" : "Uspešna rezervacija!"
      );
    }
  } else {
    if (!resInputName.value) {
      errorMessage(
        resInputName,
        language === "en"
          ? "Please Input Your Name"
          : "Molimo unesite Vaše ime i prezime"
      );
    }
    if (!resInputEmail.value) {
      errorMessage(
        resInputEmail,
        language === "en"
          ? "Please Input Your Email"
          : "Molimo unesite Vašu email adresu"
      );
    }
    if (!resInputPhone.value) {
      errorMessage(
        resInputPhone,
        language === "en"
          ? "Please Input Your Phone"
          : "Molimo unesite Vaš broj telefona"
      );
    }
    if (!resInputDate.value) {
      errorMessage(
        resInputDate,
        language === "en" ? "Please Input Date" : "Molimo unesite datum"
      );
    }
    if (!resInputTime.value) {
      errorMessage(
        resInputTime,
        language === "en" ? "Please Input Time" : "Molimo unesite vreme"
      );
    }
    if (!resInputGuests.value) {
      errorMessage(
        resInputGuests,
        language === "en"
          ? "Please Input Number Of Guests"
          : "Molimo unesite broj gostiju"
      );
    }
  }
});
