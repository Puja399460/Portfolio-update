// Dark mode toggle logic
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

function setDarkMode(enabled) {
    if (enabled) {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙';
    }
    localStorage.setItem('darkMode', enabled ? '1' : '0');
}

// Load preference
const darkPref = localStorage.getItem('darkMode');
if (darkPref === '1') {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

toggleBtn.addEventListener('click', () => {
    setDarkMode(!body.classList.contains('dark-mode'));
}); 