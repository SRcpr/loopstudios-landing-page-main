const humbergerButton = document.querySelector(".hamberger-btn");
const closeButton = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
humbergerButton.addEventListener("click", () => {
  nav.classList.add("is-open");
});
closeButton.addEventListener("click", () => {
  nav.classList.remove("is-open");
});
