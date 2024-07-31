const submitBtn = document.getElementById("submit-btn");
const card = document.getElementById("card");
const thankYou = document.getElementById("thank-you");
const rating = document.getElementById("rating");
const ratingBtns = document.querySelectorAll(".rating-btn");

let ratingChoice = "";

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    ratingChoice = btn.id;
  });
});

// change container html to display thank for rating
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (ratingChoice === "") {
    alert("Please select a rating");
    return;
  }
  {
    alert(`You selected ${rating} out of 5`);
    // card.classList.add("hidden");
    // thankYou.classList.remove("hidden");
    // rating.innerHTML = ratingChoice;
  }
});
