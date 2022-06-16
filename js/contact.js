const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const submit = document.querySelector("#submit");
const ContactSuccess = document.querySelector(".success");

function emailRegex(email) {
  const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const Email = regEx.test(email);
  return Email;
}

function validateForm(event) {
  event.preventDefault();

  let showError = false;

  if (firstName.value.trim().length > 0) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    showError = true;
  }

  if (lastName.value.trim().length >= 3) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    showError = true;
  }

  if (emailRegex(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    showError = true;
  }

  if (subject.value.trim().length >= 7) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    showError = true;
  }

  if (message.value.trim().length >= 15) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    showError = true;
  }

  if (showError) {
    ContactSuccess.innerHTML = "";
  } else {
    ContactSuccess.innerHTML = `<h2>Thank you for submitting!</h2>`;
  }
}

form.addEventListener("submit", validateForm);

