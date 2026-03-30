// Typing Effect
    const typingTextElement = document.querySelector('.typing-text');
    const phrases = [
  "Connecting talent with opportunity.",
  "Find jobs that match your skills.",
  "Where careers take the next step.",
  "Hire smarter. Apply faster.",
  "Your future starts here.",
  "One platform. Endless opportunities."
];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100;
        } else {
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typeSpeed);
    }

    type();