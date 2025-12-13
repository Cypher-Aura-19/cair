/**
 * GSAP Animations for CAIR Michigan Website
 * Smooth scroll and hover animations
 */

// Wait for DOM and GSAP to load
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // GLOBAL ANIMATIONS (All Pages)
    // ============================================

    // Navbar animation on scroll
    const header = document.querySelector('.main-header');
    if (header) {
        ScrollTrigger.create({
            start: 'top -80',
            onUpdate: (self) => {
                if (self.direction === 1) {
                    gsap.to(header, { y: -100, duration: 0.3, ease: 'power2.out' });
                } else {
                    gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out' });
                }
            }
        });
    }

    // Footer reveal animation
    const footer = document.querySelector('footer');
    if (footer) {
        gsap.fromTo(footer, 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        // Footer columns stagger
        gsap.fromTo('.footer-container > div', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power2.out'
            }
        );
    }

    // Button hover animations
    document.querySelectorAll('.btn, .btn-primary-lg, .btn-primary-sm').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.03, duration: 0.2, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });

    // Social icon hover
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { y: -4, scale: 1.1, duration: 0.25, ease: 'back.out(2)' });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { y: 0, scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Form input focus animations
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, { scale: 1.01, duration: 0.2, ease: 'power2.out' });
        });
        input.addEventListener('blur', () => {
            gsap.to(input, { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });

    // ============================================
    // CONTACT PAGE ANIMATIONS (NEW DESIGN)
    // ============================================

    // Simple Page Hero Animation
    const pageHero = document.querySelector('.page-hero');
    if (pageHero) {
        const heroTl = gsap.timeline();
        
        heroTl.from('.page-hero h1', {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power3.out'
        })
        .from('.page-hero p', {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-quick-actions .quick-action, .hero-trust-pills .trust-pill', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.2');
    }

    // Contact Methods Section
    const contactMethods = document.querySelector('.contact-methods');
    if (contactMethods) {
        gsap.fromTo('.methods-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: contactMethods,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.method-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.methods-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // Method card hover
    document.querySelectorAll('.method-card').forEach(card => {
        const icon = card.querySelector('.method-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
            gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Contact Main Section
    const contactMain = document.querySelector('.contact-main');
    if (contactMain) {
        gsap.fromTo('.contact-form-side', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: contactMain,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.contact-info-side > *', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: '.contact-info-side',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Map Section
    const mapSection = document.querySelector('.map-section');
    if (mapSection) {
        gsap.fromTo('.map-container', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: mapSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.map-info-card', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: mapSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: 0.3,
                ease: 'back.out(1.5)'
            }
        );
    }

    // FAQ Section New
    const faqSectionNew = document.querySelector('.faq-section-new');
    if (faqSectionNew) {
        gsap.fromTo('.faq-header-new', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: faqSectionNew,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.faq-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.faq-grid-new',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // FAQ card hover
    document.querySelectorAll('.faq-card').forEach(card => {
        const icon = card.querySelector('.faq-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.25, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, duration: 0.25, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // CTA Section
    const contactCta = document.querySelector('.contact-cta');
    if (contactCta) {
        gsap.fromTo('.cta-content', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: contactCta,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out'
            }
        );
    }

    // Quick link card hover
    document.querySelectorAll('.quick-link-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -5, scale: 1.02, duration: 0.25, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Social icon modern hover
    document.querySelectorAll('.social-icon-modern').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { y: -4, scale: 1.1, duration: 0.25, ease: 'back.out(2)' });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { y: 0, scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Subject chip animation
    document.querySelectorAll('.subject-chip').forEach(chip => {
        chip.addEventListener('mouseenter', () => {
            gsap.to(chip.querySelector('span'), { scale: 1.03, duration: 0.2, ease: 'power2.out' });
        });
        chip.addEventListener('mouseleave', () => {
            gsap.to(chip.querySelector('span'), { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });

    // OLD Contact Hero (fallback for old design)
    const contactHero = document.querySelector('.contact-hero');
    if (contactHero) {
        const tl = gsap.timeline();
        tl.from('.contact-hero h1', {
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.contact-hero p', {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4');
    }

    // Contact form container
    const contactForm = document.querySelector('.contact-wrapper .contact-form-container');
    if (contactForm) {
        gsap.fromTo(contactForm, 
            { opacity: 0, x: -60 },
            {
                scrollTrigger: {
                    trigger: contactForm,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }

    // Contact info sidebar
    const contactSidebar = document.querySelector('.contact-info-sidebar');
    if (contactSidebar) {
        gsap.fromTo('.contact-info-sidebar .info-card', 
            { opacity: 0, x: 60 },
            {
                scrollTrigger: {
                    trigger: contactSidebar,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.contact-info-sidebar .map-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.map-card',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Info items stagger
    if (document.querySelector('.info-item')) {
        gsap.fromTo('.info-item', 
            { opacity: 0, x: 30 },
            {
                scrollTrigger: {
                    trigger: '.info-card',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: 'power2.out'
            }
        );
    }

    // FAQ Section
    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
        gsap.fromTo('.faq-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: faqSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.faq-item', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.faq-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power2.out'
            }
        );
    }

    // FAQ item hover
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.08)', duration: 0.3, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out' });
        });
    });

    // ============================================
    // COMPLAINT PAGE ANIMATIONS
    // ============================================

    // Complaint Hero
    const complaintHero = document.querySelector('.complaint-hero');
    if (complaintHero) {
        gsap.from('.complaint-hero h1', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
        gsap.from('.complaint-hero p', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.2,
            ease: 'power3.out'
        });
    }

    // Process steps
    const processSection = document.querySelector('.process-section');
    if (processSection) {
        gsap.fromTo('.process-step', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: processSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: 'back.out(1.5)'
            }
        );
    }

    // Safety check card
    const safetyCard = document.querySelector('.safety-check-card');
    if (safetyCard) {
        gsap.fromTo(safetyCard, 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: safetyCard,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.7,
                ease: 'power3.out'
            }
        );

        // Pulse animation for safety icon
        gsap.to('.safety-check-icon', {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Mandate cards
    const mandateContainer = document.querySelector('.mandate-container');
    if (mandateContainer) {
        gsap.fromTo('.mandate-card-primary', 
            { opacity: 0, x: -60 },
            {
                scrollTrigger: {
                    trigger: mandateContainer,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.mandate-card-secondary', 
            { opacity: 0, x: 60 },
            {
                scrollTrigger: {
                    trigger: mandateContainer,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        // Focus items stagger
        gsap.fromTo('.focus-item', 
            { opacity: 0, y: 25 },
            {
                scrollTrigger: {
                    trigger: '.focus-areas-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.5,
                ease: 'power2.out'
            }
        );
    }

    // Disclaimer box
    const disclaimerBox = document.querySelector('.disclaimer-box');
    if (disclaimerBox) {
        gsap.fromTo(disclaimerBox, 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: disclaimerBox,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Incident type cards hover
    document.querySelectorAll('.type-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, scale: 1.02, duration: 0.25, ease: 'power2.out' });
            gsap.to(card.querySelector('.type-icon'), { scale: 1.2, duration: 0.25, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.25, ease: 'power2.out' });
            gsap.to(card.querySelector('.type-icon'), { scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // ============================================
    // SPEAKER PAGE ANIMATIONS
    // ============================================

    // Speaker Hero
    const speakerHero = document.querySelector('.speaker-hero');
    if (speakerHero) {
        const heroTl = gsap.timeline();
        
        heroTl.from('.hero-badge', {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'power3.out'
        })
        .from('.speaker-hero h1', {
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.speaker-hero-content > p', {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-stats', {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.hero-stat', {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.2');

        // Hero image
        gsap.from('.speaker-hero-image img', {
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3
        });

        gsap.from('.floating-badge', {
            opacity: 0,
            x: -30,
            duration: 0.6,
            ease: 'back.out(2)',
            delay: 0.8
        });

        // Floating badge pulse
        gsap.to('.floating-badge', {
            y: -5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.5
        });
    }

    // Topics section
    const topicsSection = document.querySelector('.topics-section');
    if (topicsSection) {
        gsap.fromTo('.topics-section .section-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: topicsSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.topic-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.topics-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Topic card hover
    document.querySelectorAll('.topic-card').forEach(card => {
        const img = card.querySelector('.topic-image img');
        const icon = card.querySelector('.topic-icon');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.12)', duration: 0.3, ease: 'power2.out' });
            gsap.to(img, { scale: 1.08, duration: 0.4, ease: 'power2.out' });
            gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out' });
            gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.out' });
            gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Audience section
    const audienceSection = document.querySelector('.audience-section');
    if (audienceSection) {
        gsap.fromTo('.audience-text', 
            { opacity: 0, x: -60 },
            {
                scrollTrigger: {
                    trigger: audienceSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.audience-item', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: '.audience-list',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.12,
                duration: 0.5,
                ease: 'power2.out'
            }
        );

        gsap.fromTo('.audience-image > img', 
            { opacity: 0, x: 60 },
            {
                scrollTrigger: {
                    trigger: '.audience-image',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.image-overlay-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.image-overlay-card',
                    start: 'top 95%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'back.out(1.5)'
            }
        );
    }

    // Audience item hover
    document.querySelectorAll('.audience-item').forEach(item => {
        const icon = item.querySelector('i');
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { x: 8, duration: 0.25, ease: 'power2.out' });
            gsap.to(icon, { scale: 1.15, duration: 0.25, ease: 'back.out(2)' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { x: 0, duration: 0.25, ease: 'power2.out' });
            gsap.to(icon, { scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Form section
    const formSection = document.querySelector('.form-section');
    if (formSection) {
        gsap.fromTo('.form-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: formSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.speaker-form', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: '.speaker-form-container',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.form-sidebar > *', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: '.form-sidebar',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Topic chip hover
    document.querySelectorAll('.topic-chip').forEach(chip => {
        chip.addEventListener('mouseenter', () => {
            gsap.to(chip, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
        });
        chip.addEventListener('mouseleave', () => {
            gsap.to(chip, { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });

    // Sidebar card hover
    document.querySelectorAll('.sidebar-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -5, duration: 0.25, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
        });
    });

    // ============================================
    // COMPLAINT FORM ANIMATIONS
    // ============================================

    const complaintForm = document.querySelector('.complaint-container .contact-form-container');
    if (complaintForm) {
        gsap.fromTo(complaintForm, 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: complaintForm,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        // Form section titles
        gsap.fromTo('.complaint-container .form-section-title', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: complaintForm,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.2,
                duration: 0.5,
                ease: 'power2.out'
            }
        );
    }

    // Incident type grid animation
    const incidentGrid = document.querySelector('.incident-type-grid');
    if (incidentGrid) {
        gsap.fromTo('.incident-type-grid label', 
            { opacity: 0, scale: 0.9 },
            {
                scrollTrigger: {
                    trigger: incidentGrid,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.4,
                ease: 'back.out(1.5)'
            }
        );
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, offsetY: 100 },
                        ease: 'power3.inOut'
                    });
                }
            }
        });
    });

    console.log('GSAP Animations initialized');
});


    // ============================================
    // REPORT INCIDENT PAGE ANIMATIONS (NEW DESIGN)
    // ============================================

    // Report Hero (uses same .page-hero class now, handled above)

    // Emergency Banner
    const emergencyBanner = document.querySelector('.emergency-banner');
    if (emergencyBanner) {
        gsap.fromTo('.emergency-content', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: emergencyBanner,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        // Pulse animation for emergency icon
        gsap.to('.emergency-icon', {
            scale: 1.05,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Process Timeline
    const processTimeline = document.querySelector('.process-timeline');
    if (processTimeline) {
        gsap.fromTo('.timeline-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: processTimeline,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.timeline-step', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.timeline-steps',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.timeline-connector', 
            { scaleX: 0 },
            {
                scrollTrigger: {
                    trigger: '.timeline-steps',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                scaleX: 1,
                duration: 0.8,
                delay: 0.5,
                ease: 'power2.out'
            }
        );
    }

    // Timeline step hover
    document.querySelectorAll('.timeline-step').forEach(step => {
        const icon = step.querySelector('.step-icon');
        step.addEventListener('mouseenter', () => {
            gsap.to(step, { y: -8, duration: 0.3, ease: 'power2.out' });
            gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: 'back.out(2)' });
        });
        step.addEventListener('mouseleave', () => {
            gsap.to(step, { y: 0, duration: 0.3, ease: 'power2.out' });
            gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Cases Section
    const casesSection = document.querySelector('.cases-section');
    if (casesSection) {
        gsap.fromTo('.cases-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: casesSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.case-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.cases-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.scope-notice', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: '.scope-notice',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Case card hover
    document.querySelectorAll('.case-card').forEach(card => {
        const icon = card.querySelector('.case-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
            gsap.to(icon, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Report Form Section
    const reportFormSection = document.querySelector('.report-form-section');
    if (reportFormSection) {
        gsap.fromTo('.form-section-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: reportFormSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.report-form', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: '.report-form-wrapper',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.report-sidebar > *', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: '.report-sidebar',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Incident card hover
    document.querySelectorAll('.incident-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.card-content'), { y: -5, duration: 0.2, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.card-content'), { y: 0, duration: 0.2, ease: 'power2.out' });
        });
    });

    // Testimonials Section New
    const testimonialsSectionNew = document.querySelector('.testimonials-section-new');
    if (testimonialsSectionNew) {
        gsap.fromTo('.testimonials-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: testimonialsSectionNew,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.testimonial-card-new', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.testimonials-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // Testimonial card hover
    document.querySelectorAll('.testimonial-card-new').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.25, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Report CTA
    const reportCta = document.querySelector('.report-cta');
    if (reportCta) {
        gsap.fromTo('.report-cta .cta-content', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: reportCta,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out'
            }
        );
    }
