const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".nav__mobile--hamburger");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
