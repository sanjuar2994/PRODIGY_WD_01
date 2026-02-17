// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    /* =========================================
       1. SCROLL EFFECT FOR NAVBAR
       ========================================= */
    window.addEventListener('scroll', () => {
        // Change background when user scrolls more than 50px
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* =========================================
       2. MOBILE MENU TOGGLE
       ========================================= */
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the links container
        navLinks.classList.toggle('active');
        
        // Optional: Change the hamburger icon to an 'X'
        hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    /* =========================================
       3. SMOOTH NAVIGATION HANDLING
       ========================================= */
    // Close mobile menu automatically when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });

    /* =========================================
       4. REVEAL ANIMATIONS (SCROLL-TRIGGER)
       ========================================= */
    // Simple intersection observer to fade in elements as you scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply basic fade-in to menu cards and about section
    const animatedElements = document.querySelectorAll('.menu-card, .about-text, .about-img');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});