// slider.js
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
let index = 0;

function autoSlide() {
    index++;
    if (index >= slides.length) index = 0;
    slider.scrollTo({
    left: slider.clientWidth * index,
    behavior: "smooth"
    });
}

setInterval(autoSlide, 3000); // ganti slide tiap 3 detik
