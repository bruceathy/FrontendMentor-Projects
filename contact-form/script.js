const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const submitBtn = document.getElementById("submit-btn");
const nameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // convert to try catch
  if (lastName.value === "") {
    // firstName.style.borderColor = " #970000";
    lastName.style.borderColor = " #970000";
    nameError.classList.remove("hidden");
    lastNameError.classList.remove("hidden");
    return;
  }
});
