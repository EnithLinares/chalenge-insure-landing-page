const nav = document.querySelector(".nav");
const menuToggle = document.querySelector("#menuToggle");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
