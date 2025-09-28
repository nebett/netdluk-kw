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

// register.//

        (function () {
            const form = document.getElementById('registerForm');
            const pw = document.getElementById('password');
            const confirm = document.getElementById('confirm');
            const toggle = document.querySelector('.pw-toggle');

            toggle.addEventListener('click', () => {
                const isPwd = pw.type === 'password';
                pw.type = isPwd ? 'text' : 'password';
                confirm.type = isPwd ? 'text' : 'password';
                toggle.textContent = isPwd ? 'Hide' : 'Show';
            });

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const password = form.password.value;
                const rep = form.confirm.value;

                if (!name || !email || !password || !rep) {
                    return alert('Lengkapi semua field.');
                }
                if (password.length < 6) {
                    return alert('Password minimal 6 karakter.');
                }
                if (password !== rep) {
                    return alert('Password dan konfirmasi tidak sama.');
                }

                try {
                    const btn = form.querySelector('button[type="submit"]');
                    btn.disabled = true;
                    const res = await fetch('/api/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, password })
                    });
                    const data = await res.json();
                    if (!res.ok) {
                        alert(data.error || 'Register gagal.');
                        btn.disabled = false;
                        return;
                    }
                    alert('Registrasi berhasil. Silakan login.');
                    window.location.href = 'login.html';
                } catch (err) {
                    console.error(err);
                    alert('Gagal terhubung ke server.');
                }
            });
        })();

//forgot
   
    (function () {
        const form = document.getElementById('forgotForm');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = form.email.value.trim();
            if (!email) return alert('Masukkan email.');

            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;

            try {
                // Jika ada backend: kirim POST ke endpoint reset, misal /api/forgot
                const res = await fetch('/api/forgot', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });

                if (res.ok) {
                    alert('Jika email terdaftar, instruksi reset telah dikirim. Cek inbox (atau spam).');
                    window.location.href = 'login.html';
                } else {
                    // fallback: baca pesan dari server kalau ada
                    const data = await res.json().catch(() => ({}));
                    alert(data.error || 'Gagal mengirim email. Coba lagi nanti.');
                }
            } catch (err) {
                console.error(err);
                // tanpa backend, beri petunjuk placeholder
                alert('Tidak bisa terhubung ke server. (Demo) Jika ini demo, anggap link reset dikirim.');
                window.location.href = 'login.html';
            } finally {
                btn.disabled = false;
            }
        });
    })();
