const accordionBox = document.querySelectorAll(".accordion-box");

accordionBox.forEach((box) => {
  const description = box.querySelector(".accordion-description");
  const plus = box.querySelector(".plus");
  const minus = box.querySelector(".minus");

  openAndClosedAccordion(description, plus, minus, box);
});

function openAndClosedAccordion(description, plus, minus, box) {
  box.addEventListener("click", () => {
    if (
      description.style.display === "" ||
      description.style.display === "none"
    ) {
      description.style.display = "block";
      plus.style.display = "none";
      minus.style.display = "block";
    } else {
      description.style.display = "none";
      minus.style.display = "none";
      plus.style.display = "block";
    }
  });
}
