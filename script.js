// Simple slider auto-play
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto change every 3s
setInterval(nextSlide, 3000);

// Show first slide
showSlide(currentIndex);
