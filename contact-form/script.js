const contactForm = document.getElementById("contact-form");
const thankYou = document.getElementById("thank-you");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");

// ADD QUERY TYPE VALIDATION
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  if (firstName.value === "") {
    isValid = false;
    firstNameError.classList.remove("hidden");
  } else {
    firstNameError.classList.add("hidden");
  }

  if (lastName.value === "") {
    isValid = false;
    lastNameError.classList.remove("hidden");
  } else {
    lastNameError.classList.add("hidden");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "" || !emailRegex.test(email.value)) {
    isValid = false;
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }

  if (message.value === "") {
    isValid = false;
    messageError.classList.remove("hidden");
  } else {
    messageError.classList.add("hidden");
  }

  if (!consent.checked) {
    isValid = false;
    consentError.classList.remove("hidden");
  } else {
    consentError.classList.add("hidden");
  }

  if (isValid) {
    thankYou.classList.remove("hidden");
    contactForm.reset();
  }
});
