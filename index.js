const humbergerButton = document.querySelector(".humberger-btn");
const closeButton = document.querySelector(".close-btn");
const openMenu = document.querySelector(".menu .open");
const headerMenu = document.querySelector(".header__menu");
console.log(headerMenu);
humbergerButton.addEventListener("click", () => {
  closeButton.classList.add("show");
  humbergerButton.classList.add("hide");
  openMenu.classList.add("show");
  headerMenu.classList.add("bg");
});
closeButton.addEventListener("click", () => {
  humbergerButton.classList.remove("hide");
  closeButton.classList.remove("show");
  openMenu.classList.remove("show");
  headerMenu.classList.remove("bg");
});
