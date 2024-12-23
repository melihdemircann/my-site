document.addEventListener('DOMContentLoaded', () => {
    // Mevcut kodlarınız...

    // 3D Tilt Effect for Project Cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const tiltX = (y - 0.5) * 20; // Dikey tilt açısı
            const tiltY = (x - 0.5) * -20; // Yatay tilt açısı
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.transition = 'none';
            
            // Parlama efekti
            const glare = card.querySelector('.glare') || document.createElement('div');
            glare.className = 'glare';
            glare.style.position = 'absolute';
            glare.style.width = '100%';
            glare.style.height = '100%';
            glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`;
            
            if (!card.querySelector('.glare')) {
                card.appendChild(glare);
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease-out';
            
            const glare = card.querySelector('.glare');
            if (glare) glare.remove();
        });
    });

    // Morph Text Animation
    class MorphText {
        constructor(element) {
            this.element = element;
            this.words = this.element.dataset.words.split(',');
            this.currentIndex = 0;
            this.init();
        }

        init() {
            this.element.innerHTML = `
                <span class="morph-word current">${this.words[0]}</span>
                <span class="morph-word next">${this.words[1]}</span>
            `;
            this.animate();
        }

        animate() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.words.length;
                const nextIndex = (this.currentIndex + 1) % this.words.length;
                
                const current = this.element.querySelector('.current');
                const next = this.element.querySelector('.next');
                
                current.classList.add('fade-out');
                next.classList.add('fade-in');
                
                setTimeout(() => {
                    current.textContent = this.words[this.currentIndex];
                    next.textContent = this.words[nextIndex];
                    
                    current.classList.remove('fade-out');
                    next.classList.remove('fade-in');
                }, 600);
            }, 3000);
        }
    }

    // Cursor Trail Effect
    class CursorTrail {
        constructor() {
            this.trails = [];
            this.maxTrails = 20;
            this.init();
        }

        init() {
            window.addEventListener('mousemove', this.onMouseMove.bind(this));
        }

        createTrail(x, y) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${x}px;
                top: ${y}px;
            `;
            document.body.appendChild(trail);
            return trail;
        }

        onMouseMove(e) {
            const trail = this.createTrail(e.clientX, e.clientY);
            this.trails.push(trail);

            if (this.trails.length > this.maxTrails) {
                const oldTrail = this.trails.shift();
                oldTrail.remove();
            }

            this.trails.forEach((trail, index) => {
                const scale = (this.maxTrails - index) / this.maxTrails;
                trail.style.transform = `scale(${scale})`;
                trail.style.opacity = scale;
            });
        }
    }

    // Smooth Parallax Scrolling
    class SmoothParallax {
        constructor() {
            this.images = document.querySelectorAll('.parallax-image');
            this.init();
        }

        init() {
            this.setInitialStyles();
            window.addEventListener('scroll', this.onScroll.bind(this));
            window.addEventListener('resize', this.setInitialStyles.bind(this));
        }

        setInitialStyles() {
            this.images.forEach(img => {
                const container = img.parentElement;
                container.style.overflow = 'hidden';
                img.style.position = 'absolute';
                img.style.width = '100%';
                img.style.height = '120%';
                img.style.objectFit = 'cover';
                img.style.transition = 'transform 0.1s ease-out';
            });
        }

        onScroll() {
            this.images.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                const scrollPercent = rect.top / window.innerHeight;
                const moveAmount = scrollPercent * 100;
                
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    img.style.transform = `translateY(${moveAmount}px)`;
                }
            });
        }
    }

    // Initiate new animations
    new CursorTrail();
    new SmoothParallax();
    document.querySelectorAll('[data-words]').forEach(el => new MorphText(el));

    // Progress Bar Animation
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #00ff88, #00a1ff);
        z-index: 1000;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const progressBar = document.querySelector('.scroll-progress');
        const scrollPosition = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollPosition / pageHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    });    
});

// Gerekli CSS stilleri
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        animation: fadeOut 1s ease-out forwards;
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.3);
        }
    }

    .morph-word {
        position: absolute;
        transition: opacity 0.6s ease-out;
    }

    .morph-word.fade-out {
        opacity: 0;
    }

    .morph-word.fade-in {
        opacity: 1;
    }

    .parallax-image {
        will-change: transform;
    }

    .scroll-progress {
        box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }

    .project-card {
        transition: transform 0.5s ease-out;
        will-change: transform;
    }
`;
document.head.appendChild(style);
