// Typing animation for homepage header
const typingText = document.getElementById('typing-text');
const phrases = [
    "Hi I'm Puja",
    "Web Designer",
    "Lifelong Learner"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 90;
let pauseTime = 1200;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, typingSpeed / 2);
        }
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex++);
        if (charIndex > currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}
type(); 