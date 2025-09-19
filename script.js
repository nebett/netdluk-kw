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

setInterval(autoSlide, 3000);


const form = document.getElementById('loginForm');
        const pw = document.getElementById('password');
        const toggle = document.querySelector('.pw-toggle');

        toggle.addEventListener('click', () => {
            const isPwd = pw.type === 'password';
            pw.type = isPwd ? 'text' : 'password';
            toggle.textContent = isPwd ? 'Hide' : 'Show';
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.email.value.trim();
            const password = form.password.value.trim();

            if (!email || !password) {
                alert('Isi email dan password dulu.');
                return;
            }

            // placeholder: kirim ke backend di sini
            alert('Login berhasil (contoh).');
            // location.href = 'index.html';
        });
