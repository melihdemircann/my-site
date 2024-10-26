document.addEventListener('DOMContentLoaded', () => {
    // Typing effect
    const text = "Melih Demircan";
    let index = 0;
    const typingText = document.getElementById("typing-text");
    
    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (typingText.textContent.length > 0) {
            typingText.textContent = typingText.textContent.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            index = 0;
            setTimeout(type, 1000);
        }
    }

    type();

    // Skill items animation delay
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Smooth scroll with progress indicator
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for sections
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const speed = 0.5;
            const offset = window.pageYOffset;
            const distance = section.offsetTop;
            const viewport = window.innerHeight;
            
            if (offset + viewport > distance) {
                section.style.transform = `translateY(${(offset - distance) * speed}px)`;
            }
        });
    });

    // Project cards hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Intersection Observer for fade-in effects with different animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // Particle effect in header
    const header = document.querySelector('header');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        header.appendChild(particle);
    }

    // Active section highlight with smooth transition
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
