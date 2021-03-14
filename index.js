let open = document.querySelector(".nav-open");
let close = document.querySelector(".nav-close");
let nav = document.querySelector(".nav");
let menu = document.getElementsByTagName("a");
console.log(menu);

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    nav.classList.remove("visible");
  });
}
close.addEventListener("click", () => {
  nav.classList.remove("visible");
});
