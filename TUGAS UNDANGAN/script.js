document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
})

const countdownDate = new Date('January 1, 2025 00:00:00').getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div>${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik</div>
    `;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown').innerHTML = 'Happy Wedding';
    }
}, 1000);