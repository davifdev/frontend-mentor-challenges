const nums = document.querySelectorAll(".num");
const cardContainer = document.querySelector(".card");
const cardThanks = document.querySelector(".thank-you");
const ratingValue = document.querySelector(".rating-value");
const btn = document.querySelector(".btn");

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    setRating(e.target.textContent);
  });
});

function setRating(num) {
  ratingValue.innerHTML = num;
}

btn.addEventListener("click", (e) => {
  if (cardThanks.classList.contains("hide")) {
    cardContainer.classList.add("hide");
    cardThanks.classList.remove("hide");
  }
});


