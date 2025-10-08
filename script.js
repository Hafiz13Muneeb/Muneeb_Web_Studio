// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    function gsapAnimatons() {

        // ===== GSAP ANIMATIONS =====
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animations
        gsap.from('.hero h1', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.hero p', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });

        gsap.from('.hero-btns', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });

        // About section animations
        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
            },
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });

        gsap.from('.about-content', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
            },
            duration: 1,
            x: 50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });

        // Services section animations
        gsap.utils.toArray('.service-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
        });



        // Portfolio section animations
        gsap.utils.toArray('.portfolio-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
        });

        // Contact section animations
        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 80%',
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });

        // ===== FORM SUBMISSION HANDLING =====
        const contactForm = document.getElementById('contact-form');

        // #change: Remove this if using Google Forms directly
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // #change: Replace with actual form handling
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);

            // Reset the form
            contactForm.reset();
        });

    }
    gsapAnimatons()

});