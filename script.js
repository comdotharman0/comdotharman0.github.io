// Portfolio Website JavaScript
// Handles navigation, animations, form submission, and interactive features

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Typing animation for hero title
    function typeWriter() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;
        
        const text = "Hi, I'm Abc Singh";
        let i = 0;
        
        function type() {
            if (i < text.length) {
                typingElement.textContent = text.substring(0, i + 1);
                i++;
                setTimeout(type, 100);
            }
        }
        
        setTimeout(type, 1000);
    }
    
    typeWriter();
    
    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const increment = target / 50;
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current);
                            setTimeout(updateCounter, 40);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => observer.observe(counter));
    }
    
    animateCounters();
    
    // Skills bar animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        skillBar.style.width = width + '%';
                    }, 300);
                    
                    observer.unobserve(skillBar);
                }
            });
        }, observerOptions);
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    animateSkillBars();
    
    // Portfolio filtering
    function initPortfolioFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.add('visible');
                            item.classList.remove('hidden');
                        }, 10);
                    } else {
                        const category = item.getAttribute('data-category');
                        if (category === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.classList.add('visible');
                                item.classList.remove('hidden');
                            }, 10);
                        } else {
                            item.classList.remove('visible');
                            item.classList.add('hidden');
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    
    initPortfolioFilter();
    
    // Fade in animation on scroll
    function initScrollAnimations() {
        const fadeElements = document.querySelectorAll('.about-text, .skill-item, .tool-item, .contact-info, .contact-form');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(element => {
            element.classList.add('fade-in');
            observer.observe(element);
        });
    }
    
    initScrollAnimations();
    
    // Portfolio items visibility animation
    function initPortfolioAnimations() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        portfolioItems.forEach(item => observer.observe(item));
    }
    
    initPortfolioAnimations();
    
    // Contact form handling
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                // Basic validation
                if (!name || !email || !subject || !message) {
                    showNotification('Please fill in all fields', 'error');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showNotification('Please enter a valid email address', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });
        }
    }
    
    initContactForm();
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Smooth hero button scrolling
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Parallax effect for hero section
    function initParallaxEffect() {
        const hero = document.querySelector('.hero');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Uncomment to enable parallax effect
    // initParallaxEffect();
    
    // Intersection Observer for revealing elements
    function initRevealAnimation() {
        const revealElements = document.querySelectorAll('section');
        
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        revealElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });
    }
    
    // Initialize reveal animations after a short delay
    setTimeout(initRevealAnimation, 500);
    
    // Keyboard navigation accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on escape
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounced scroll handler
    const debouncedScrollHandler = debounce(() => {
        updateActiveNavLink();
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Console welcome message
    console.log('%c👋 Welcome to Abc Singh\'s Portfolio!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #10b981; font-size: 12px;');
    
});

// Additional utility functions

// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate number counting
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    stepTime = Math.max(stepTime, minTimer);
    
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    
    function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        element.textContent = value;
        
        if (value === end) {
            clearInterval(timer);
        }
    }
    
    const timer = setInterval(run, stepTime);
    run();
}

// Function to get random color from theme palette
function getRandomThemeColor() {
    const colors = ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Export functions for potential external use
window.portfolioUtils = {
    isElementInViewport,
    animateNumber,
    getRandomThemeColor,
    isValidEmail
};
