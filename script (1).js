
        // --- Reveal Sections on Scroll ---
        const sections = document.querySelectorAll('section');
        const observerOptions = { threshold: 0.15 };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => sectionObserver.observe(section));

        // --- Simple Typewriter Subtitle ---
        const text = "Software Engineer | Data Scientist | Rust & Python Specialist";
        let i = 0;
        const speed = 50;

        // Not used for the hero main title to keep SEO and loading fast, 
        // but used for a "terminal" prompt feel if desired.
    
