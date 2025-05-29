const articleShare = document.querySelector(".article__share");
const shareComponent = document.querySelector(".share-component");
const shareComponentMobile = document.querySelector(".share-component__mobile");

console.log(articleShare);

articleShare.addEventListener("click", () => {
  articleShare.classList.toggle("article-active");
  shareComponent.classList.toggle("active");
  shareComponentMobile.classList.toggle("active");
});

const articleShareMobile = document.querySelector(".mobile");

articleShareMobile.addEventListener("click", () => {
  shareComponentMobile.classList.toggle("active");
  articleShare.classList.toggle("article-active");
  shareComponent.classList.toggle("active");
});
