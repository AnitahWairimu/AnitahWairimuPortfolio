
// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const loadingScreen = document.getElementById('loadingScreen');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const backToTopBtn = document.getElementById('backToTop');
const typingText = document.getElementById('typingText');
const contactForm = document.getElementById('contactForm');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

// ========================================
// 1. LOADING SCREEN
// ========================================

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2400);
});

// ========================================
// 2. PARTICLE GENERATION
// ========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ========================================
// 3. TYPING EFFECT
// ========================================

const roles = [
    'Software Developer',
    'Web Developer',
    'Problem Solver',
    'Full-Stack Developer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRoles() {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting) {
        if (charIndex < currentRole.length) {
            typingText.textContent += currentRole[charIndex];
            charIndex++;
            setTimeout(typeRoles, 100);
        } else {
            isDeleting = true;
            setTimeout(typeRoles, 2000);
        }
    } else {
        if (charIndex > 0) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRoles, 50);
        } else {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRoles, 500);
        }
    }
}

typeRoles();

// ========================================
// 4. CUSTOM CURSOR
// ========================================

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 15 + 'px';
        cursorFollower.style.top = e.clientY - 15 + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorFollower.style.transform = 'scale(1.2)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

// Hide custom cursor on mobile
const isMobile = window.matchMedia('(max-width: 768px)').matches;
if (isMobile) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}

// ========================================
// 5. HAMBURGER MENU
// ========================================

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========================================
// 6. DARK MODE 
// ========================================

document.body.classList.add('dark-mode');

// ========================================
// 7. NAVBAR ACTIVE LINK
// ========================================

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ========================================
// 8. STICKY NAVBAR
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// 9. SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 10. BACK TO TOP BUTTON
// ========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// 11. SCROLL REVEAL ANIMATIONS (AOS)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ========================================
// 12. ANIMATED COUNTERS
// ========================================

const counters = document.querySelectorAll('.counter');

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
        if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ========================================
// 13. FORM VALIDATION & SUBMISSION
// ========================================

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Name
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate Subject
    if (subject.length < 5) {
        document.getElementById('subjectError').textContent = 'Subject must be at least 5 characters';
        isValid = false;
    } else {
        document.getElementById('subjectError').textContent = '';
    }

    // Validate Message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    return isValid;
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simulate form submission
        console.log('Form submitted:', { name, email, subject, message });

        // Create success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #6366f1, #ec4899);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 5000;
            animation: slideInRight 0.5s ease-out;
        `;
        successMsg.textContent = '✓ Message sent successfully!';
        document.body.appendChild(successMsg);

        // Remove success message after 3 seconds
        setTimeout(() => {
            successMsg.remove();
        }, 3000);

        // Reset form
        contactForm.reset();
    }
});

// ========================================
// 14. PROJECT FILTERING
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'slideInRight 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ========================================
// 15. TESTIMONIALS SLIDER
// ========================================

let currentSlide = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalSlides = testimonialCards.length;

function showSlide(n) {
    const track = document.querySelector('.testimonial-track');
    const offset = -n * 100;
    track.style.transform = `translateX(${offset}%)`;

    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[n].classList.add('active');
}

function nextTestimonial() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevTestimonial() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

prevSlide.addEventListener('click', prevTestimonial);
nextSlide.addEventListener('click', nextTestimonial);

// Auto-rotate testimonials
setInterval(nextTestimonial, 5000);

// Initialize first slide
showSlide(0);

// ========================================
// 16. SKILL CARDS ANIMATION
// ========================================

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// ========================================
// 17. FEATURED PROJECT GALLERY
// ========================================

const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
const galleryMain = document.querySelector('.gallery-main img');

if (galleryThumbs.length > 0 && galleryMain) {
    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            galleryMain.src = thumb.src;
            galleryMain.style.animation = 'none';
            setTimeout(() => {
                galleryMain.style.animation = 'fadeIn 0.5s ease-out';
            }, 10);

            // Update active thumb
            galleryThumbs.forEach(t => t.style.opacity = '0.6');
            thumb.style.opacity = '1';
        });
    });
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// ========================================
// 18. PARALLAX SCROLLING EFFECT
// ========================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const parallaxElements = heroSection.querySelectorAll('.hero-image');
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }
});

// ========================================
// 19. RIPPLE EFFECT ON BUTTONS
// ========================================

const buttons = document.querySelectorAll('.btn, .filter-btn, .slider-nav');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: rippleAnimation 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========================================
// 20. IMAGE LAZY LOADING
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ========================================
// 21. KEYBOARD NAVIGATION
// ========================================

document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    // Arrow keys for testimonial navigation
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    }
    if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// ========================================
// 22. LIVE CLOCK (Optional Enhancement)
// ========================================

function updateLiveTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    // You can display this in a specific element if needed
}

setInterval(updateLiveTime, 1000);

// ========================================
// 23. DOCUMENT READY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add any additional initialization here
    updateActiveLink();
});

// ========================================
// 24. RESIZE HANDLER
// ========================================

window.addEventListener('resize', () => {
    // Handle responsive adjustments
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ========================================
// 25. PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
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

// Use debounce for scroll-heavy operations
const debouncedScroll = debounce(updateActiveLink, 100);
window.addEventListener('scroll', debouncedScroll);

// ========================================
// 26. SERVICE WORKER REGISTRATION (Optional)
// ========================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}

// ========================================
// 27. ANALYTICS AND TRACKING
// ========================================

function trackPageView() {
    // Add your analytics tracking code here
    // Example: Google Analytics, Hotjar, etc.
    console.log('Page view tracked');
}

trackPageView();

// ========================================
// 28. ACCESSIBILITY ENHANCEMENTS
// ========================================

// Add focus indicators for keyboard navigation
document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ========================================
// END OF SCRIPT
// ========================================
