// Constants and configuration
const CONFIG = {
    PARTICLE_COUNT: 50,
    ANIMATION_DURATION: 50,
    GUIDE_SHOW_DELAY: 2000,
    GUIDE_HIDE_DELAY: 5000,
    SWIPE_THRESHOLD: 50,
    SWIPE_VERTICAL_LIMIT: 100,
    PROJECTS_PER_PAGE: 2
};

// Utility functions
const utils = {
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    random: (min, max) => Math.random() * (max - min) + min,
    clamp: (value, min, max) => Math.max(min, Math.min(value, max))
};

class StudiesSection {
    static ICONS = {
        CALENDAR: '<i class="fas fa-calendar"></i>',
        EXTERNAL_LINK: '<i class="fas fa-external-link-alt"></i>'
    };

    constructor() {
        this.currentStudyIndex = 0;
        this.STUDIES_PER_PAGE = 3;
    }

    renderStudiesSection(studies = []) {
        if (!studies.length) {
            return this.renderEmptyState();
        }

        const visibleStudies = this.getVisibleStudies(studies);
        const hasMoreStudies = this.currentStudyIndex + this.STUDIES_PER_PAGE < studies.length;
        const hasPreviousStudies = this.currentStudyIndex > 0;

        return `
            <section class="studies-section" aria-labelledby="studies-title">
                <header class="section-header">
                    <h2 id="studies-title" class="section-title">
                        ${StudiesSection.ICONS.CALENDAR}
                        Current Articles
                    </h2>
                </header>
                
                <div class="studies-grid">
                    ${visibleStudies.map((study, index) => this.renderStudyCard(study, index)).join('')}
                </div>

            </section>
        `;
    }

    getVisibleStudies(studies) {
        if (!studies || !studies.length) return [];
        
        const visibleStudies = [];
        for (let i = 0; i < this.STUDIES_PER_PAGE; i++) {
            const index = (this.currentIndex + i) % studies.length;
            visibleStudies.push(studies[index]);
        }
        return visibleStudies;
    }

    getThreeStudies(studies) {
        const result = [];
        for (let i = 0; i < this.STUDIES_PER_PAGE; i++) {
            // Calculate the actual index with wraparound
            const index = (this.currentStudyIndex + i) % studies.length;
            result.push(studies[index]);
        }
        return result;
    }

    navigateStudies(direction) {
        const totalStudies = window.PORTFOLIO_DATA.studies.length;
        const maxStartIndex = Math.max(0, totalStudies - this.STUDIES_PER_PAGE);
        
        // Calculate new index
        this.currentStudyIndex = Math.min(
            Math.max(0, this.currentStudyIndex + (direction * this.STUDIES_PER_PAGE)),
            maxStartIndex
        );
    }

    renderStudyCard(study, index) {
        if (!study) return '';
        
        const {title, description, link, date} = study;
        const animationDelay = index * 0.1;
        
        return `
            <article class="study-card" 
                     style="animation-delay: ${animationDelay}s"
                     data-study-id="${index}">
                <div class="study-content">
                    <h3 class="study-title">
                        ${this.sanitizeHTML(title)}
                    </h3>
                    
                    ${date ? `
                        <time class="study-date" datetime="${date}">
                            ${new Date(date).toLocaleDateString('en-EN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    ` : ''}
                    
                    <p class="study-description">
                        ${this.sanitizeHTML(description)}
                    </p>
                    
                    <div class="study-links">
                        <a href="${this.sanitizeHTML(link)}"
                           class="study-link"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Read more about ${this.sanitizeHTML(title)}">
                            <span>Read Article</span>
                            ${StudiesSection.ICONS.EXTERNAL_LINK}
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    renderStudyLinks(link, title) {
        if (!link) return '';
        
        return `
            <div class="study-links">
                <a href="${this.sanitizeHTML(link)}"
                   class="study-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Read more about ${this.sanitizeHTML(title)}">
                    ${StudiesSection.ICONS.EXTERNAL_LINK}
                    <span>Read Article</span>
                </a>
            </div>
        `;
    }

    renderEmptyState() {
        return `
            <section class="studies-section studies-empty">
                <div class="study-card">
                    <p class="study-description">
                        No articles available at the moment.
                        Please check back later.
                    </p>
                </div>
            </section>
        `;
    }

    getVisibleStudies(studies) {
        if (!studies || !studies.length) return [];
        
        return studies.slice(
            this.currentStudyIndex,
            this.currentStudyIndex + this.STUDIES_PER_PAGE
        );
    }

    sanitizeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }}
class PortfolioManager {
    constructor(projects, introduction, studies) {
        this.projects = projects;
        this.introduction = introduction;
        this.studies = studies;
        this.currentProjectIndex = 0;
        this.isAnimating = false;
        this.showingIntroduction = true;
        this.eventHandlers = {};
        this.studiesSection = new StudiesSection();

        this.initializeComponents();
    }

    async initializeComponents() {
        try {
            this.initializeEventListeners();
            await this.createParticleBackground();
            await this.displayContent();
            this.showGuides();
            this.initializeAccessibility();
        } catch (error) {
            console.error('Failed to initialize components:', error);
        }
    }

    initializeAccessibility() {
        const container = document.getElementById('projects-container');
        if (container) {
            container.setAttribute('role', 'main');
            container.setAttribute('aria-live', 'polite');
    
            const navigationButtons = document.querySelectorAll('.nav-button');
            navigationButtons.forEach(button => {
                button.setAttribute('aria-label', button.id === 'back-button' ? 'Previous projects' : 'Next projects');
            });
        }
    }

    async showGuides() {
        const guides = document.querySelectorAll('.guide');
        
        for (const guide of guides) {
            await utils.delay(CONFIG.GUIDE_SHOW_DELAY);
            guide.classList.add('visible');
            await utils.delay(CONFIG.GUIDE_HIDE_DELAY);
            guide.classList.remove('visible');
        }
    }

    async displayContent() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.style.opacity = '0';
        
        await utils.delay(CONFIG.ANIMATION_DURATION);
        
        // Clear existing content first
        container.innerHTML = '';
        
        // Only show one section based on showingIntroduction flag
        if (this.showingIntroduction) {
            container.innerHTML = this.renderIntroduction();
        } else {
            container.innerHTML = this.renderProjects();
        }
        
        container.style.opacity = '1';
        this.updateNavigationButtons();
        this.initializeProjectInteractions();
    }

    initializeProjectInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => this.handleProjectHover(card));
            card.addEventListener('mouseleave', () => this.handleProjectLeave(card));
        });
    }

    handleProjectHover(card) {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    }

    handleProjectLeave(card) {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    }

    renderIntroduction() {
        return `
            <div class="introduction-card" role="article">
                <h1 class="introduction-title">${this.introduction.title}</h1>
                <div class="introduction-content">
                    ${this.introduction.content.split('\n\n').map(paragraph => 
                        `<p>${paragraph}</p>`
                    ).join('')}
                </div>
                <div class="skills-section">
                    <h2>Skills</h2>
                    <div class="project-tech-tags" role="list">
                        ${this.introduction.skills.map(skill => 
                            `<span class="tech-tag" role="listitem">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderProjects() {
        const projects = this.getCurrentProjectSet();
        const isLastPage = this.currentProjectIndex + CONFIG.PROJECTS_PER_PAGE >= this.projects.length;
    
        return `
            <div class="content-layout">
                <div class="projects-section">
                    <h2 class="section-title">Projects</h2>
                    <div class="projects-grid" role="list">
                        ${projects.map(project => this.createProjectCard(project)).join('')}
                        
                        ${isLastPage ? `
                        ` : ''}
                    </div>
                    ${this.createPagination()}
                </div>
                ${this.studiesSection.renderStudiesSection(this.studies)}
            </div>
        `;
    }

    createPagination() {
        const totalPages = Math.ceil(this.projects.length / CONFIG.PROJECTS_PER_PAGE);
        const currentPage = Math.floor(this.currentProjectIndex / CONFIG.PROJECTS_PER_PAGE) + 1;
        
        return `
            <div class="pagination" role="navigation">
                ${Array(totalPages).fill(0).map((_, i) => `
                    <span class="page-dot ${i + 1 === currentPage ? 'active' : ''}" 
                          role="button" 
                          aria-label="Page ${i + 1}"
                          data-page="${i + 1}">
                    </span>
                `).join('')}
            </div>
        `;
    }

    createProjectCard(project) {
        return `
            <div class="project-card" 
                 data-id="${project.id}" 
                 role="listitem"
                 tabindex="0">
                <div class="project-image-container">
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="project-image"
                         loading="lazy">
                    <div class="project-overlay">
                        <div class="project-tech-tags">
                            ${project.technologies.map(tech => 
                                `<span class="tech-tag">${tech}</span>`
                            ).join('')}
                        </div>
                        <div class="project-links">
                            ${project.github ? `
                                <a href="${project.github}" 
                                   target="_blank" 
                                   class="project-link"
                                   aria-label="View GitHub repository">
                                    <i class="fab fa-github"></i> GitHub
                                </a>
                            ` : ''}
                            ${project.demo ? `
                                <a href="${project.demo}" 
                                   target="_blank" 
                                   class="project-link"
                                   aria-label="View live demo">
                                    <i class="fas fa-external-link-alt"></i> Demo
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
    }

    getCurrentProjectSet() {
        const startIndex = this.showingIntroduction ? 0 : this.currentProjectIndex;
        return this.projects.slice(
            startIndex,
            startIndex + CONFIG.PROJECTS_PER_PAGE
        );
    }

    async navigateProjects(direction) {
        if (this.isAnimating) return;

        const container = document.querySelector('.container');
        
        if (this.handleIntroductionTransition(direction) || 
            !this.canNavigate(direction)) {
            return;
        }

        // Update both projects and studies
        if (!this.showingIntroduction) {
            this.studiesSection.navigateStudies(direction);
            this.handleProjectNavigation(direction);
        }

        this.isAnimating = true;

        try {
            await this.animateTransition(direction, container);
            await this.displayContent();
        } finally {
            this.isAnimating = false;
        }
    }

    canNavigate(direction) {
        if (this.showingIntroduction && direction < 0) return false;
        if (!this.showingIntroduction) {
            const maxProjects = this.projects.length;
            if (direction > 0 && this.currentProjectIndex + CONFIG.PROJECTS_PER_PAGE >= maxProjects) {
                return false;
            }
            if (direction < 0 && this.currentProjectIndex <= 0) {
                return false;
            }
        }
        return true;
    }

    handleIntroductionTransition(direction) {
        if (this.showingIntroduction && direction > 0) {
            this.showingIntroduction = false;
            this.currentProjectIndex = 0; // Reset to first project when leaving introduction
            this.displayContent();
            return true;
        }

        if (!this.showingIntroduction && direction < 0 && this.currentProjectIndex === 0) {
            this.showingIntroduction = true;
            this.displayContent();
            return true;
        }

        return false;
    }

    handleProjectNavigation(direction) {
        if (!this.showingIntroduction) {
            const nextIndex = this.currentProjectIndex + (direction * CONFIG.PROJECTS_PER_PAGE);
            this.currentProjectIndex = utils.clamp(
                nextIndex,
                0,
                Math.max(0, this.projects.length - CONFIG.PROJECTS_PER_PAGE)
            );
        }
    }

    async animateTransition(direction, container) {
        this.isAnimating = true;


        container.style.transition = `transform ${CONFIG.ANIMATION_DURATION}ms ease-out, opacity ${CONFIG.ANIMATION_DURATION}ms ease-out`;
        container.style.opacity = '0';
        container.style.transform = `translateX(${direction * 50}px)`;

        await utils.delay(CONFIG.ANIMATION_DURATION);
        await this.displayContent();
        
        container.style.transform = 'translateX(0)';
        container.style.opacity = '1';
        
        await utils.delay(CONFIG.ANIMATION_DURATION);
        this.isAnimating = false;
    }

    async createParticleBackground() {
        const backgroundOverlay = document.querySelector('.background-overlay');
        if (!backgroundOverlay) return;
        
        for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${utils.random(0, 100)}%`;
            particle.style.top = `${utils.random(0, 100)}%`;
            particle.style.animationDuration = `${utils.random(5, 15)}s`;
            particle.style.animationDelay = `${utils.random(0, 5)}s`;
            backgroundOverlay.appendChild(particle);
        }
    }
    updateNavigationButtons() {
        const backButton = document.getElementById('back-button');
        const forwardButton = document.getElementById('forward-button');
    
        if (!backButton || !forwardButton) {
            console.warn('Navigation buttons not found');
            return;
        }
    
        // Back button logic - disable only when in introduction
        backButton.disabled = this.currentSection === 'introduction';
    
        // Forward button logic - only consider projects section
        let forwardDisabled = false;
        
        if (this.currentSection === 'introduction') {
            forwardDisabled = false; // Always enabled in introduction
        } else if (this.currentSection === 'projects') {
            // Disable forward button if we're at the last set of projects
            const remainingProjects = this.projects.length - (this.currentProjectIndex + CONFIG.PROJECTS_PER_PAGE);
            forwardDisabled = remainingProjects <= 0;
        }
    
        forwardButton.disabled = forwardDisabled;
    
        // Update button labels
        backButton.setAttribute('aria-label', this.getBackButtonLabel());
        forwardButton.setAttribute('aria-label', this.getForwardButtonLabel());
    }

    initializeEventListeners() {
        this.addEventHandler('click', '#forward-button', () => this.navigateProjects(1));
        this.addEventHandler('click', '#back-button', () => this.navigateProjects(-1));
        this.addEventHandler('keydown', document, this.handleKeyNavigation.bind(this));
        this.initializeTouchNavigation();
    }


 
    addEventHandler(event, selector, handler) {
        const element = typeof selector === 'string' 
            ? document.querySelector(selector)
            : selector;
            
        if (element) {
            element.addEventListener(event, handler);
            this.eventHandlers[`${event}-${selector}`] = { element, handler };
        }
    }

    removeEventHandler(event, selector) {
        const key = `${event}-${selector}`;
        const handler = this.eventHandlers[key];
        
        if (handler) {
            handler.element.removeEventListener(event, handler.handler);
            delete this.eventHandlers[key];
        }
    }

    handleKeyNavigation(e) {
        if (e.key === 'ArrowLeft') this.navigateProjects(-1);
        if (e.key === 'ArrowRight') this.navigateProjects(1);
    }

    initializeTouchNavigation() {
        let touchStartX = 0;
        let touchStartY = 0;

        this.addEventHandler('touchstart', document, (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });

        this.addEventHandler('touchend', document, (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const diffX = touchStartX - touchEndX;
            const diffY = Math.abs(touchEndY - touchStartY);

            if (Math.abs(diffX) > CONFIG.SWIPE_THRESHOLD && 
                diffY < CONFIG.SWIPE_VERTICAL_LIMIT) {
                this.navigateProjects(diffX > 0 ? 1 : -1);
            }
        });
    }

    destroy() {
        Object.keys(this.eventHandlers).forEach(key => {
            const [event, selector] = key.split('-');
            this.removeEventHandler(event, selector);
        });
    }
}

class EnhancedPortfolioManager extends PortfolioManager {
    constructor(projects, introduction, studies) {
        super(projects, introduction, studies);
        this.currentSection = 'introduction'; // 'introduction', 'projects', or 'studies'
        this.studiesSection = new StudiesSection(); // StudiesSection'ı başlat
        this.currentTheme = 'dark';
        this.initializeEnhancements();
    }

    initializeEnhancements() {
        // Theme ve diğer geliştirmeleri başlat
        this.initializeComponents();
    }

    async initializeComponents() {
        try {
            this.initializeEventListeners();
            await this.createParticleBackground();
            await this.displayContent();
            this.showGuides();
            this.initializeAccessibility();
            
            console.log('Current State:', {
                section: this.currentSection,
                projectIndex: this.currentProjectIndex,
                showingIntroduction: this.showingIntroduction,
                totalProjects: this.projects.length
            });
        } catch (error) {
            console.error('Failed to initialize components:', error);
        }
    }

    async navigateContent(direction) {
        if (this.isAnimating) return;
    
        const container = document.querySelector('.container');
        let shouldNavigate = true;
    
        // Calculate next state before navigation
        if (this.currentSection === 'introduction' && direction > 0) {
            // Move from introduction to projects
            this.currentSection = 'projects';
            this.showingIntroduction = false;
            this.currentProjectIndex = 0;
        } else if (this.currentSection === 'projects') {
            const maxProjects = this.projects.length;
            const nextProjectIndex = this.currentProjectIndex + (direction * CONFIG.PROJECTS_PER_PAGE);
            
            if (direction > 0) {
                // Only allow forward navigation if there are more projects
                if (nextProjectIndex >= maxProjects) {
                    shouldNavigate = false;
                } else {
                    this.currentProjectIndex = nextProjectIndex;
                }
            } else if (direction < 0) {
                if (this.currentProjectIndex === 0) {
                    // Go back to introduction
                    this.currentSection = 'introduction';
                    this.showingIntroduction = true;
                } else {
                    // Navigate projects backwards
                    this.currentProjectIndex = Math.max(0, nextProjectIndex);
                }
            }
        }
    
        if (shouldNavigate) {
            try {
                this.isAnimating = true;
                await this.animateTransition(direction, container);
                await this.displayContent();
            } finally {
                this.isAnimating = false;
            }
    
            this.updateNavigationButtons();
        }
    }

    updateNavigationButtons() {
        const backButton = document.getElementById('back-button');
        const forwardButton = document.getElementById('forward-button');
    
        if (!backButton || !forwardButton) {
            console.warn('Navigation buttons not found');
            return;
        }
    
        // Back button logic
        backButton.disabled = this.currentSection === 'introduction';
    
        // Forward button logic
        let forwardDisabled = false;
        if (this.currentSection === 'projects') {
            const maxProjects = this.currentProjectIndex + CONFIG.PROJECTS_PER_PAGE >= this.projects.length;
            const maxStudies = this.studiesSection.currentStudyIndex + this.studiesSection.STUDIES_PER_PAGE >= this.studies.length;
            forwardDisabled = maxProjects || maxStudies;
        }
    
        forwardButton.disabled = forwardDisabled;
    
        // Update button labels
        backButton.setAttribute('aria-label', this.getBackButtonLabel());
        forwardButton.setAttribute('aria-label', this.getForwardButtonLabel());
    }

    getBackButtonLabel() {
        switch (this.currentSection) {
            case 'projects': return 'Back to introduction';
            case 'studies': return 'Back to projects';
            default: return 'Previous';
        }
    }

    getForwardButtonLabel() {
        switch (this.currentSection) {
            case 'introduction': return 'View projects';
            case 'projects': return 'View studies';
            default: return 'Next';
        }
    }

    initializeEventListeners() {
        // Navigation buttons
        const forwardButton = document.getElementById('forward-button');
        const backButton = document.getElementById('back-button');

        if (forwardButton) {
            forwardButton.addEventListener('click', () => {
                console.log('Forward button clicked');
                this.navigateContent(1);
            });
        }

        if (backButton) {
            backButton.addEventListener('click', () => {
                console.log('Back button clicked');
                this.navigateContent(-1);
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                console.log('Left arrow pressed');
                this.navigateContent(-1);
            }
            if (e.key === 'ArrowRight') {
                console.log('Right arrow pressed');
                this.navigateContent(1);
            }
        });

        // Touch navigation
        this.initializeTouchNavigation();
    }

    initializeTouchNavigation() {
        let touchStartX = 0;
        let touchStartY = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const diffX = touchStartX - touchEndX;
            const diffY = Math.abs(touchEndY - touchStartY);

            if (Math.abs(diffX) > CONFIG.SWIPE_THRESHOLD && 
                diffY < CONFIG.SWIPE_VERTICAL_LIMIT) {
                console.log('Swipe detected:', diffX > 0 ? 'left' : 'right');
                this.navigateContent(diffX > 0 ? 1 : -1);
            }
        });
    }

    async displayContent() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.style.opacity = '0';
        await utils.delay(CONFIG.ANIMATION_DURATION);
        
        // Display content based on current section
        switch (this.currentSection) {
            case 'introduction':
                container.innerHTML = this.renderIntroduction();
                break;
            case 'projects':
                container.innerHTML = this.renderProjects();
                break;
            case 'studies':
                container.innerHTML = this.studiesSection.renderStudiesSection(this.studies);
                break;
        }
        
        container.style.opacity = '1';
        this.updateNavigationButtons();
        this.initializeProjectInteractions();
    }


    async animateTransition(direction, container) {
        if (!container) return;

        container.style.transition = `transform ${CONFIG.ANIMATION_DURATION}ms ease-out, opacity ${CONFIG.ANIMATION_DURATION}ms ease-out`;
        container.style.opacity = '0';
        container.style.transform = `translateX(${direction * 50}px)`;

        await utils.delay(CONFIG.ANIMATION_DURATION);
        
        container.style.transform = 'translateX(0)';
        container.style.opacity = '1';
    }

    destroy() {
        // Event listener'ları temizle
        Object.keys(this.eventHandlers).forEach(key => {
            const [event, selector] = key.split('-');
            this.removeEventHandler(event, selector);
        });

        console.log('Portfolio manager destroyed');
    }
}
// DOM yüklendiğinde ContactManager'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.portfolioManager = new EnhancedPortfolioManager(
            projects,
            introduction,
            studies
        );
        
        window.addEventListener('error', (event) => {
            console.error('Portfolio error:', event.error);
        });

        if (window.performance) {
            const navigationStart = performance.now();
            window.addEventListener('load', () => {
                const loadTime = performance.now() - navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            });
        }
    } catch (error) {
        console.error('Portfolio initialization error:', error);
    }
});
const introduction = {
    title: 'Hello,',
    content: `I am Melih Demircan. I am a 3rd-year Computer Engineering student at Kütahya Dumlupınar University. 
    My focus is on artificial intelligence, Internet of Things (IoT), and mobile application development. 
    In today's rapidly evolving technological landscape, I aim to create innovative projects and solutions while 
    gaining hands-on experience through various initiatives.

    I continuously strive to stay current in both my academic career and personal development. My passion for 
    learning and research drives me to explore the latest technologies in the software world and integrate this 
    knowledge into my projects.`,
    skills: [
        'C', 'C++', 'Flutter', 'Dart', 'Arduino', 
        'Unity', 'Java', 'Linux', 'Git', 'Github', 
        'SQL', 'Python', 'Rust', 'Android Studio'
    ]
};

const projects = [
    { 
        id: '1',
        title: 'Flags World', 
        image: './images/flags-world.png',
        description: 'An application that provides information about countries was created on a planet covered with 3D countries flags.',
        technologies: ['Unity', 'C#'],
        github: 'https://www.linkedin.com/feed/update/urn:li:activity:7173325153337032704',
        demo: '#',
    },
    { 
        id: '2',
        title: 'Practice Spanish', 
        image: './images/practice-spanish.png',
        description: 'A Spanish learning application was created for iOS and Android platforms using Flutter',
        technologies: ['Flutter', 'Dart'],
        github: 'https://www.linkedin.com/posts/marsias-games_i%CC%87spanyolca-%C3%B6%C4%9Frenme-yolculu%C4%9Funuzu-ba%C5%9Flat%C4%B1n-activity-7274807613781889025-OGLk',
        demo: '#'
    },
    { 
        id: '3',
        title: 'Shopping Life', 
        image: './images/shopping-life.png',
        description: 'A 2D mobile game was made using Unity',
        technologies: ['Unity', 'C#'],
        github: 'https://www.linkedin.com/posts/marsias-games_yeni-oyun-shopping-life-marsias-ugcPost-7229525791284318208-HOib',
        demo: '#'
    },
    { 
        id: '4',
        title: 'Parolla Games', 
        image: './images/parolla-games.png',
        description: 'Using C# and SQL, a game site was created with payment and inventory management system.',
        technologies: ['C#', 'SQL', 'ASP.NET'],
        github: 'https://github.com/melihdemircann/Parolla',
    },
    { 
        id: '5',
        title: 'Survey Chart', 
        image: './images/survey-chart.png',
        description: 'Using C# and SQL, an application was made that displays the survey result on graphs.',
        technologies: ['C#', 'SQL'],
        github: 'https://github.com/melihdemircann/Veri_Grafik_Secim',
    },
    { 
        id: '6',
        title: 'Cat Litter', 
        image: './images/cat-litter.png',
        description: 'A system was made using Esp8266 and MQ135, allowing the user to track the cats litter.',
        technologies: ['Arduino', 'MQ135', 'ESP8266'],
        github: 'https://github.com/melihdemircann/Cat_Litter',
        challenge: 'Creating a reliable IoT solution for pet waste monitoring',
        solution: 'Implemented sensor-based tracking with real-time data transmission'
    },
    { 
        id: '7',
        title: 'Mind Mirror', 
        image: './images/Freud.png',
        description: 'A platform for dream analysis was created with Freud and Jung interpretations.',
        technologies: ['Html', 'Css', 'Javascript'],
        github: 'https://www.linkedin.com/feed/update/urn:li:activity:7173325153337032704',
        demo: '#'
    },
    { 
        id: '8',
        title: 'Grade Recording System Project', 
        image: './images/grade-secording-system.png',
        description: 'Student grade recording system was created using C# and SQL.',
        technologies: ['C#', 'SQL'],
        github: 'https://github.com/melihdemircann/Grade-Recording-System',
        demo: '#'
    },
];

const studies = [
    {
        title: "Introduction to Rust",
        description: "Learning about the Rust programming language and getting started with Rust development.",
        date: "2023-03-11",
        link: "https://medium.com/@melih.demircan00/rust-2a72883576b1"
    },
    {
        title: "AI in Space",
        description: "Researching how artificial intelligence can be utilized in space missions and various space-related processes.",
        date: "2023-03-18",
        link: "https://medium.com/@melih.demircan00/uzayda-yapay-zeka-ef91982fc839"
    },
    {
        title: "AI and IoT Revolution in Healthcare",
        description: "The healthcare sector is experiencing one of the biggest transformations in its history.",
        date: "2024-11-03",
        link: "https://medium.com/@melih.demircan00/f36c75a262b7"
    },
    {
        title: "Quantum AI",
        description: "Quantum AI is a next-generation AI approach that takes advantage of the unique deployments of quantum mechanics.",
        date: "2024-11-03",
        link: "https://medium.com/@melih.demircan00/kuantum-yapay-zeka-b6cb2a71d790"
    },
];

// Global Exports
window.PORTFOLIO_DATA = {
    introduction,
    projects,
    studies
};



document.addEventListener('DOMContentLoaded', () => {
    const blobCharacter = document.querySelector('.blob-character');
    const blobBody = document.querySelector('.blob-body');
    const blobEyeLeft = document.querySelector('.blob-eye-left');
    const blobEyeRight = document.querySelector('.blob-eye-right');
    const speechBubble = document.querySelector('.speech-bubble');

    let isEscaping = false;
    let currentMessageIndex = 0;

    const messages = [
        "Welcome! Here, you will discover my projects related to software and technology.",
        "While setting up this site, I was inspired by my passion for technology and software.",
        "With each project, I learn something new and share what I’ve learned here.",
        "In my projects, I use technologies like Flutter, Unity, and Python. You’ll find everything you can do with these technologies here!",
        "On my website, I share not only technical projects but also my thoughts on the world of technology and gaming.",
        "Software development allows me to create fun and educational projects. Here, I bring both worlds together!",
        "On my site, you can find the challenges I face in game development and software, along with their solutions.",
        "I develop software with a focus on user experience. My projects offer both user-friendly designs and functionality.",
        "My projects are both creative and educational! Each one contains valuable lessons and inspiration about software development.",
        "In my projects, I combine technology with creative thinking and practical applications. You’ll see this reflected on my site!",
        "With my passion for game development, I created the project ‘Shopping Life,’ which will be accessible here soon!",
        "You can find everything you’re curious about quantum computers here. If you want to keep up with developments in this field, you’re in the right place!",
        "On my site, you can learn more about the projects I’ve developed using Flutter, Unity, and Python. They’re all here for those who want to learn!",
        "Every challenge I faced in my software development journey has made me a better developer. I share these experiences on my site.",
        "Here, you’ll find guides, projects, and technical information about software development. There’s content for every skill level!",
        "In my projects that combine game design and software development, I offer unique solutions for user experience.",
        "I learn something new in the world of software every day. Here, I share what I’ve learned on this journey with you.",
        "On my site, I don’t just share technical content—I also guide you in this field by sharing my experiences and insights.",
        "In my projects, I focus on users’ needs and create solution-oriented content.",
        "Developing more creative solutions in each project inspires me to progress in the software world.",
        "Game development merges with my software projects, resulting in fun and engaging content. You can find it all here.",
        "By overcoming the obstacles I face in software development, I continuously strive to become a better version of myself in every project.",
        "On my site, I present software development projects in both an educational and entertaining way.",
        "In my projects, innovative ideas and creative solutions always take the forefront. Take a look at this site for inspiration!",
        "Projects I’ve developed using technologies like Flutter, Unity, and Python are waiting for you here! Discover what you can do with these tools.",
        "The time I’ve spent in the software world has taught me a lot, both technically and creatively. I share what I’ve learned here.",
        "My interest in technology is reflected in my projects. Everything related to software development and game creation is waiting for you here!",
        "My game development projects are not just fun but also educational and inspiring."
    ];
    
    

    
    // İlk mesajı göster
    speechBubble.textContent = messages[0];
    speechBubble.style.opacity = '1';

    // 15 saniyede bir mesajları değiştir
    setInterval(() => {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        speechBubble.style.opacity = '0';
        
        setTimeout(() => {
            speechBubble.textContent = messages[currentMessageIndex];
            speechBubble.style.opacity = '1';
        }, 100);
    }, 10000);

    // Mevcut escape ve diğer fonksiyonlar aynı kalacak
    function escapeToRandomPosition(event) {
        if (isEscaping) return;
        isEscaping = true;
        
        const windowWidth = window.innerWidth;
        const randomX = Math.floor(Math.random() * (windowWidth - 200)); // 200px is the assumed width of the blob
        
        blobCharacter.style.transition = 'transform 0.5s ease-out';
        blobCharacter.style.transform = `translateX(${randomX}px)`; // Only move in X direction
        blobCharacter.style.opacity = '0.7';
        blobCharacter.style.pointerEvents = 'none';
        blobBody.style.transform = 'rotate(10deg) scale(1.1)';
        
        setTimeout(() => {
            blobCharacter.style.transition = 'none';
            blobBody.style.transform = '';
            blobCharacter.style.opacity = '1';
            blobCharacter.style.pointerEvents = 'auto';
            isEscaping = false;
        }, 500);
    }

    // Interactive hover effects
    blobCharacter.addEventListener('mouseenter', (event) => {
        // Only trigger hover effects if not escaping
        if (!isEscaping) {
            blobBody.style.transform = 'scale(1.1) rotate(0deg)';
            blobEyeLeft.style.transform = 'translateX(-4px)';
            blobEyeRight.style.transform = 'translateX(4px)';
        }
    });

    blobCharacter.addEventListener('mouseleave', () => {
        // Only reset if not escaping
        if (!isEscaping) {
            blobBody.style.transform = '';
            blobEyeLeft.style.transform = '';
            blobEyeRight.style.transform = '';
        }
    });

    // Click interaction to hide/show speech bubble and escape
    blobCharacter.addEventListener('click', (event) => {
        if (!isEscaping) {
            speechBubble.style.opacity = speechBubble.style.opacity === '1' ? '0' : '1';
            escapeToRandomPosition(event);
        }
    });

    // Add document-wide event listener to track cursor and make blob escape
    document.addEventListener('mousemove', (event) => {
        // Skip escape if currently escaping
        if (isEscaping) return;

        const characterRect = blobCharacter.getBoundingClientRect();
        const distanceThreshold = 100; // Pixel distance before escaping

        const distance = Math.sqrt(
            Math.pow(event.clientX - (characterRect.left + characterRect.width / 2), 2) +
            Math.pow(event.clientY - (characterRect.top + characterRect.height / 2), 2)
        );

        if (distance < distanceThreshold) {
            escapeToRandomPosition(event);
        }
    });

    // Random mood changes
    function changeMood() {
        const moods = [
            { color1: '#6a5acd', color2: '#7b68ee' },
            { color1: '#32cd32', color2: '#90ee90' },
            { color1: '#ff6347', color2: '#ff7f50' },
            { color1: '#1e90ff', color2: '#87ceeb' }
        ];

        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        blobBody.style.background = `linear-gradient(135deg, ${randomMood.color1}, ${randomMood.color2})`;
    }

    // Periodic mood and subtle animation variations
    setInterval(() => {
        if (!isEscaping) {
            changeMood();
            
            // Randomize blob shape and float slightly
            blobBody.style.transform = `
                rotate(${(Math.random() * 4 - 2).toFixed(1)}deg) 
                translateZ(${(Math.random() * 20 - 10).toFixed(1)}px)
            `;
        }
    }, 5000);

    // Dynamic eye movement
    function moveEyes() {
        if (!isEscaping) {
            const maxOffset = 3;
            blobEyeLeft.style.transform = `translateX(${(Math.random() * maxOffset * 2 - maxOffset).toFixed(1)}px)`;
            blobEyeRight.style.transform = `translateX(${(Math.random() * maxOffset * 2 - maxOffset).toFixed(1)}px)`;
        }
    }

    setInterval(moveEyes, 2000);
});

// Add smooth entrance animation for social links
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach((link, index) => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        link.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
      }, 100 * (index + 1));
    });
  
    // Add hover effect with mouse position
    socialLinks.forEach(link => {
      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        link.style.setProperty('--mouse-x', `${x}px`);
        link.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  
    // Add click animation
    socialLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const circle = document.createElement('div');
        circle.classList.add('click-effect');
        
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        
        link.appendChild(circle);
        
        setTimeout(() => circle.remove(), 500);
      });
    });
  });

  
