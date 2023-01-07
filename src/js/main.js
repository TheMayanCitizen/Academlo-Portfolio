const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const burguerMenu = document.querySelector(".burguer-menu");

function menuHandler() {
  menu.classList.toggle("menu__pop");
}

burguerMenu.addEventListener("click", menuHandler);

links.forEach((link) => {
  link.addEventListener("click", menuHandler);
});
