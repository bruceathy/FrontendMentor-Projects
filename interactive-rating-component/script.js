const submitBtn = document.getElementById("submit-btn");
const container = document.getElementById("container");
const ratingBtns = document.querySelectorAll(".rating-btn");

let rating = "";

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    rating = btn.id;
  });
});

submitBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  if (rating === "") {
    alert("Please select a rating");
    return;
  }
  {
    alert(`You selected ${rating} out of 5`);
    // container.innerHTML = `
    // <h1>You selected ${rating} out of 5</h1>
    // <h2>Thank you!</h2>
    // <p>We appreciate you taking the time to give a rating.
    // If you ever need more support, don't hesitate to get in touch!</p>`;
  }
});
