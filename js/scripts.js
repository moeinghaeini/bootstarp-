/*!
* Moein Ghaeini Portfolio - Custom JavaScript
* Interactive features and animations for personal portfolio
*/

// Enhanced Portfolio JavaScript with 10/10 Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading states and skeleton screens
    initializeLoadingStates();
    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: ['#6366f1', '#f59e0b', '#4f46e5', '#d97706', '#4338ca', '#b45309'] },
                shape: { type: 'circle' },
                opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
                size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 1, sync: false } },
                line_linked: { enable: true, distance: 150, color: '#6366f1', opacity: 0.5, width: 1.5 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });
    }

    // Animated counter for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounters(), 20);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.hero-content');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateCounters, 1000);
                }
            });
        });
        observer.observe(statsSection);
    }

    // Enhanced typing animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        typingText.style.borderRight = '2px solid #1e30f3';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    typingText.style.borderRight = 'none';
                }, 1000);
            }
        };
        setTimeout(typeWriter, 2000);
    }

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .feature, .btn');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Typing animation for hero text
    const heroText = document.querySelector('.display-3');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 1000);
    }

    // Contact form enhancement
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || document.getElementById('name').value;
            const email = formData.get('email') || document.getElementById('email').value;
            const phone = formData.get('phone') || document.getElementById('phone').value;
            const message = formData.get('message') || document.getElementById('message').value;
            
            // Create mailto link
            const subject = `Contact from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:moein@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Thank you! Your email client should open now.', 'success');
        });
    }

    // Project card hover effects
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // Parallax effect for profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            profileImg.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Initialize dark mode
    initializeDarkMode();
    
    // Initialize advanced animations
    initializeAdvancedAnimations();
    
    // Initialize PWA features
    initializePWAFeatures();
});

// Loading States and Skeleton Screens
function initializeLoadingStates() {
    // Add skeleton loading for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
    
    // Add loading states for dynamic content
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Dark Mode Implementation
function initializeDarkMode() {
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the current theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Create dark mode toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'btn btn-outline-secondary position-fixed';
    darkModeToggle.style.cssText = 'top: 20px; right: 20px; z-index: 1000; border-radius: 50%; width: 50px; height: 50px;';
    darkModeToggle.innerHTML = currentTheme === 'dark' ? 
        '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    document.body.appendChild(darkModeToggle);
    
    // Toggle theme on button click
    darkModeToggle.addEventListener('click', function() {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        this.innerHTML = newTheme === 'dark' ? 
            '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// Advanced Animations
function initializeAdvancedAnimations() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for multiple elements
                const siblings = entry.target.parentElement.children;
                Array.from(siblings).forEach((sibling, index) => {
                    if (sibling === entry.target) {
                        setTimeout(() => {
                            sibling.style.animationDelay = `${index * 0.1}s`;
                        }, 100);
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .skill-card, .contact-card, .feature');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add hover effects with 3D transforms
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
        });
    });
}

// PWA Features
function initializePWAFeatures() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
    
    // Add install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        const installButton = document.createElement('button');
        installButton.className = 'btn btn-primary position-fixed';
        installButton.style.cssText = 'bottom: 20px; right: 20px; z-index: 1000;';
        installButton.innerHTML = '<i class="bi bi-download me-2"></i>Install App';
        installButton.addEventListener('click', () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                }
                deferredPrompt = null;
                installButton.remove();
            });
        });
        
        document.body.appendChild(installButton);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Enhanced CSS for 10/10 Portfolio
const style = document.createElement('style');
style.textContent = `
    /* Dark Mode Support */
    [data-theme="dark"] {
        --bs-body-bg: #0f172a;
        --bs-body-color: #e2e8f0;
        --bs-white: #1e293b;
        --bs-light: #334155;
        --bs-dark: #f1f5f9;
        --bs-gray-100: #1e293b;
        --bs-gray-200: #334155;
        --bs-gray-300: #475569;
        --bs-gray-400: #64748b;
        --bs-gray-500: #94a3b8;
        --bs-gray-600: #cbd5e1;
        --bs-gray-700: #e2e8f0;
        --bs-gray-800: #f1f5f9;
        --bs-gray-900: #f8fafc;
    }
    
    [data-theme="dark"] .navbar {
        background-color: rgba(15, 23, 42, 0.95) !important;
        border-bottom: 1px solid #334155;
    }
    
    [data-theme="dark"] .card {
        background-color: #1e293b;
        border: 1px solid #334155;
        color: #e2e8f0;
    }
    
    [data-theme="dark"] .bg-light {
        background-color: #1e293b !important;
    }
    
    [data-theme="dark"] .text-muted {
        color: #94a3b8 !important;
    }
    
    /* Enhanced Animations */
    .animate-in {
        animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    /* Enhanced Navbar */
    .navbar-scrolled {
        background-color: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(20px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }
    
    [data-theme="dark"] .navbar-scrolled {
        background-color: rgba(15, 23, 42, 0.95) !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    
    /* Enhanced Cards */
    .card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: none;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    [data-theme="dark"] .card:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
    }
    
    /* Enhanced Buttons */
    .btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }
    
    .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn:hover::before {
        left: 100%;
    }
    
    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.2);
    }
    
    .btn:active {
        transform: translateY(0);
    }
    
    /* Enhanced Skill Bars */
    .skill-bar {
        height: 6px;
        background: linear-gradient(90deg, #6366f1, #f59e0b);
        border-radius: 3px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }
    
    .skill-bar::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .skill-bar.animate-in {
        transform: scaleX(1);
    }
    
    /* Enhanced Profile Image */
    .profile-img {
        animation: float 6s ease-in-out infinite;
        transition: all 0.3s ease;
    }
    
    .profile-img:hover {
        animation-play-state: paused;
        transform: scale(1.05);
    }
    
    /* Enhanced Particles */
    #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .hero-content {
        position: relative;
        z-index: 2;
    }
    
    /* Enhanced Focus States for Accessibility */
    .btn:focus,
    .form-control:focus,
    .form-select:focus {
        outline: 3px solid #6366f1;
        outline-offset: 2px;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
    }
    
    [data-theme="dark"] .btn:focus,
    [data-theme="dark"] .form-control:focus,
    [data-theme="dark"] .form-select:focus {
        outline-color: #818cf8;
        box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.3);
    }
    
    /* Enhanced Typography */
    .text-gradient {
        background: linear-gradient(135deg, #6366f1, #f59e0b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 3s ease-in-out infinite;
    }
    
    @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
    
    /* Loading States */
    .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }
    
    [data-theme="dark"] .skeleton {
        background: linear-gradient(90deg, #334155 25%, #475569 50%, #334155 75%);
        background-size: 200% 100%;
    }
    
    @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
    
    /* Enhanced Scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    [data-theme="dark"] ::-webkit-scrollbar-track {
        background: #1e293b;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #6366f1, #f59e0b);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #4f46e5, #d97706);
    }
    
    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
    
    /* High Contrast Mode Support */
    @media (prefers-contrast: high) {
        .card {
            border: 2px solid currentColor;
        }
        
        .btn {
            border: 2px solid currentColor;
        }
    }
    
    /* Skip Link for Accessibility */
    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #6366f1;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        font-weight: bold;
        transition: top 0.3s;
    }
    
    .skip-link:focus {
        top: 6px;
    }
    
    /* Enhanced Social Links */
    .social-link {
        transition: all 0.3s ease;
        display: inline-block;
    }
    
    .social-link:hover {
        transform: translateY(-3px) scale(1.1);
    }
    
    .social-link:focus {
        outline: 3px solid #6366f1;
        outline-offset: 2px;
        border-radius: 4px;
    }
`;
document.head.appendChild(style);