"use strict";

// == Date Input ==

$("#input-date").datepicker({
  dateFormat: "dd/mm/yy",
});

// == Time Input ==

$("#input-time").timepicker({
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

function openOverlay() {
  $(".overlay").css("display", "flex");
  //   $("html, body").css({
  //     overflow: "hidden",
  //     height: "100%",
  //   });
}

function closeOverlay() {
  $(".overlay").css("display", "none");
  //   $("html, body").css({
  //     overflow: "auto",
  //     height: "auto",
  //   });
}

// Validate Reservation Form

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const inputDate = document.getElementById("input-date");
const inputTime = document.getElementById("input-time");
const inputGuests = document.getElementById("input-guests");
const overlay = document.getElementsByClassName("overlay");

inputName.addEventListener("focus", function () {
  inputName.placeholder = "Full Name";
  inputName.style.borderColor = "white";
  inputName.classList.remove("red-placeholder");
});
inputEmail.addEventListener("focus", function () {
  inputEmail.placeholder = "Email Address";
  inputEmail.style.borderColor = "white";
  inputEmail.classList.remove("red-placeholder");
});
inputPhone.addEventListener("focus", function () {
  inputPhone.placeholder = "Phone Number";
  inputPhone.style.borderColor = "white";
  inputPhone.classList.remove("red-placeholder");
});
inputDate.addEventListener("focus", function () {
  inputDate.placeholder = "Reservation Date";
  inputDate.style.borderColor = "white";
  inputDate.classList.remove("red-placeholder");
});
inputTime.addEventListener("focus", function () {
  inputTime.placeholder = "Reservation Time";
  inputTime.style.borderColor = "white";
  inputTime.classList.remove("red-placeholder");
});
inputGuests.addEventListener("focus", function () {
  inputGuests.placeholder = "Number Of Guests";
  inputGuests.style.borderColor = "white";
  inputGuests.classList.remove("red-placeholder");
});

function validateForm() {
  if (
    inputName.value &&
    inputEmail.value &&
    inputPhone.value &&
    inputDate.value &&
    inputTime.value &&
    inputGuests.value
  ) {
    if (!inputEmail.value.includes("@")) {
      inputEmail.value = "";
      inputEmail.placeholder = "Invalid Email Address";
      inputEmail.style.borderColor = "#ff6961";
      inputEmail.classList.add("red-placeholder");
    } else {
      const reservation = {
        fullName: inputName.value,
        email: inputEmail.value,
        phoneNumber: inputPhone.value,
        date: inputDate.value,
        time: inputTime.value,
        numberOfGuests: inputGuests.value,
      };

      inputName.value = "";
      inputEmail.value = "";
      inputPhone.value = "";
      inputDate.value = "";
      inputTime.value = "";
      inputGuests.value = "";

      $(".overlay").css("display", "none");

      console.log(reservation);
      alert("Reservation Successful!");
    }
  } else {
    if (!inputName.value) {
      inputName.placeholder = "Please Input Your Name";
      inputName.style.borderColor = "#ff6961";
      inputName.classList.add("red-placeholder");
    }
    if (!inputEmail.value) {
      inputEmail.placeholder = "Please Input Your Email";
      inputEmail.style.borderColor = "#ff6961";
      inputEmail.classList.add("red-placeholder");
    }
    if (!inputPhone.value) {
      inputPhone.placeholder = "Please Input Your Phone";
      inputPhone.style.borderColor = "#ff6961";
      inputPhone.classList.add("red-placeholder");
    }
    if (!inputDate.value) {
      inputDate.placeholder = "Please Input Date";
      inputDate.style.borderColor = "#ff6961";
      inputDate.classList.add("red-placeholder");
    }
    if (!inputTime.value) {
      inputTime.placeholder = "Please Input Time";
      inputTime.style.borderColor = "#ff6961";
      inputTime.classList.add("red-placeholder");
    }
    if (!inputGuests.value) {
      inputGuests.placeholder = "Please Input Number Of Guests";
      inputGuests.style.borderColor = "#ff6961";
      inputGuests.classList.add("red-placeholder");
    }
  }
}
