// Scroll to Top Button logic
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 