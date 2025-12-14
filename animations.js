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
    // PAGE HEADER STRIP ANIMATIONS
    // ============================================

    // Page Header Strip
    const pageHeaderStrip = document.querySelector('.page-header-strip');
    if (pageHeaderStrip) {
        const headerTl = gsap.timeline();
        
        headerTl.fromTo('.breadcrumb', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        )
        .fromTo('.page-header-strip h1', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.2'
        )
        .fromTo('.page-header-strip p', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.header-quick-actions .quick-action, .header-trust-badges .trust-item', 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: 'power2.out' },
            '-=0.2'
        );
    }

    // Quick action hover
    document.querySelectorAll('.quick-action').forEach(action => {
        action.addEventListener('mouseenter', () => {
            gsap.to(action, { y: -3, scale: 1.02, duration: 0.2, ease: 'power2.out' });
        });
        action.addEventListener('mouseleave', () => {
            gsap.to(action, { y: 0, scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });

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

    // ============================================
    // DONATE PAGE ANIMATIONS
    // ============================================

    // Impact Stats
    const impactStats = document.querySelector('.impact-stats');
    if (impactStats) {
        gsap.fromTo('.stat-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: impactStats,
                    start: 'top 85%',
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

    // Stat card hover
    document.querySelectorAll('.stat-card').forEach(card => {
        const icon = card.querySelector('.stat-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Donation Main Section
    const donationMain = document.querySelector('.donation-main');
    if (donationMain) {
        gsap.fromTo('.donation-form-container', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: donationMain,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.donation-sidebar > *', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: '.donation-sidebar',
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

    // Amount option hover
    document.querySelectorAll('.amount-option').forEach(option => {
        option.addEventListener('mouseenter', () => {
            gsap.to(option.querySelector('.amount-box'), { scale: 1.05, duration: 0.2, ease: 'power2.out' });
        });
        option.addEventListener('mouseleave', () => {
            gsap.to(option.querySelector('.amount-box'), { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });

    // Why Donate Section
    const whyDonate = document.querySelector('.why-donate');
    if (whyDonate) {
        gsap.fromTo('.why-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: whyDonate,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.why-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.why-grid',
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

    // Why card hover
    document.querySelectorAll('.why-card').forEach(card => {
        const icon = card.querySelector('.why-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Donor Testimonials
    const donorTestimonials = document.querySelector('.donor-testimonials');
    if (donorTestimonials) {
        gsap.fromTo('.donor-testimonials h2', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: donorTestimonials,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Donate FAQ
    const donateFaq = document.querySelector('.donate-faq');
    if (donateFaq) {
        gsap.fromTo('.donate-faq .faq-header-new', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: donateFaq,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Donate CTA
    const donateCta = document.querySelector('.donate-cta');
    if (donateCta) {
        gsap.fromTo('.donate-cta .cta-content', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: donateCta,
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

    // ============================================
    // ABOUT PAGE ANIMATIONS
    // ============================================

    // About Hero
    const aboutHero = document.querySelector('.about-hero');
    if (aboutHero) {
        const heroTl = gsap.timeline();
        
        heroTl.fromTo('.about-hero .hero-badge', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo('.about-hero h1', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.hero-left > p', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.hero-actions', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.2'
        )
        .fromTo('.hero-image-wrapper img', 
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
        )
        .fromTo('.hero-stats-floating', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.3'
        );
    }

    // Mission Section
    const missionSection = document.querySelector('.mission-section');
    if (missionSection) {
        gsap.fromTo('.mission-content', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: missionSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.mission-image', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: missionSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.mission-point', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: '.mission-points',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // Mission point hover
    document.querySelectorAll('.mission-point').forEach(point => {
        point.addEventListener('mouseenter', () => {
            gsap.to(point, { x: 10, duration: 0.25, ease: 'power2.out' });
        });
        point.addEventListener('mouseleave', () => {
            gsap.to(point, { x: 0, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Values Section
    const valuesSection = document.querySelector('.values-section');
    if (valuesSection) {
        gsap.fromTo('.values-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: valuesSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.value-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.values-grid',
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

    // Value card hover
    document.querySelectorAll('.value-card').forEach(card => {
        const icon = card.querySelector('.value-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Services Section
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        gsap.fromTo('.services-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: servicesSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.service-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.services-grid',
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

    // Service card hover
    document.querySelectorAll('.service-card').forEach(card => {
        const icon = card.querySelector('.service-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // History/Timeline Section
    const historySection = document.querySelector('.history-section');
    if (historySection) {
        gsap.fromTo('.history-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: historySection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.timeline-item', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Team Section
    const teamSection = document.querySelector('.team-section');
    if (teamSection) {
        gsap.fromTo('.team-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: teamSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.team-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.team-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Team card hover
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Partners Section
    const partnersSection = document.querySelector('.partners-section');
    if (partnersSection) {
        gsap.fromTo('.partner-logo', 
            { opacity: 0, y: 20 },
            {
                scrollTrigger: {
                    trigger: partnersSection,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.4,
                ease: 'power2.out'
            }
        );
    }

    // About CTA
    const aboutCta = document.querySelector('.about-cta');
    if (aboutCta) {
        gsap.fromTo('.about-cta .cta-content', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: aboutCta,
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

    // ============================================
    // ADVOCACY PAGE ANIMATIONS
    // ============================================

    // Advocacy Hero
    const advocacyHero = document.querySelector('.advocacy-hero');
    if (advocacyHero) {
        const heroTl = gsap.timeline();
        
        heroTl.fromTo('.advocacy-hero .hero-badge', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo('.advocacy-hero h1', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.hero-content-left > p', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.advocacy-hero .hero-actions', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.2'
        )
        .fromTo('.hero-feature-card', 
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.4'
        );
    }

    // Advocacy Stats
    const advocacyStats = document.querySelector('.advocacy-stats');
    if (advocacyStats) {
        gsap.fromTo('.advocacy-stats .stat-item', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: advocacyStats,
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

    // Focus Section
    const focusSection = document.querySelector('.focus-section');
    if (focusSection) {
        gsap.fromTo('.focus-section .section-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: focusSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.focus-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.focus-grid',
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

    // Focus card hover
    document.querySelectorAll('.focus-card').forEach(card => {
        const icon = card.querySelector('.focus-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Approach Section
    const approachSection = document.querySelector('.approach-section');
    if (approachSection) {
        gsap.fromTo('.approach-content', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: approachSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.approach-image', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: approachSection,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.approach-step', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: '.approach-steps',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // Campaigns Section
    const campaignsSection = document.querySelector('.campaigns-section');
    if (campaignsSection) {
        gsap.fromTo('.campaigns-section .section-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: campaignsSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.campaign-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.campaigns-grid',
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

    // Action Section
    const actionSection = document.querySelector('.action-section');
    if (actionSection) {
        gsap.fromTo('.action-section .section-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: actionSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.action-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.action-grid',
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

    // Victories Section
    const victoriesSection = document.querySelector('.victories-section');
    if (victoriesSection) {
        gsap.fromTo('.victories-section .section-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: victoriesSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.victory-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.victories-grid',
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

    // Advocacy CTA
    const advocacyCta = document.querySelector('.advocacy-cta');
    if (advocacyCta) {
        gsap.fromTo('.advocacy-cta .cta-content', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: advocacyCta,
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

    // ============================================
    // SAFE SPACE PAGE ANIMATIONS (REFINED)
    // ============================================

    // SS Hero
    const ssHero = document.querySelector('.ss-hero');
    if (ssHero) {
        const heroTl = gsap.timeline();
        
        heroTl.fromTo('.ss-hero-label', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        )
        .fromTo('.ss-hero-text h1', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.2'
        )
        .fromTo('.ss-hero-text > p', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.ss-hero-buttons', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.2'
        )
        .fromTo('.ss-hero-image', 
            { opacity: 0, x: 60, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.5'
        )
        .fromTo('.ss-hero-stats-card', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' },
            '-=0.3'
        );
    }

    // SS Intro Section
    const ssIntro = document.querySelector('.ss-intro');
    if (ssIntro) {
        gsap.fromTo('.ss-intro-icon', 
            { opacity: 0, scale: 0.5 },
            {
                scrollTrigger: {
                    trigger: ssIntro,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(2)'
            }
        );

        gsap.fromTo('.ss-intro h2, .ss-intro p', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: ssIntro,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.6,
                delay: 0.2,
                ease: 'power3.out'
            }
        );
    }

    // SS Values Section
    const ssValues = document.querySelector('.ss-values');
    if (ssValues) {
        gsap.fromTo('.ss-value-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: ssValues,
                    start: 'top 85%',
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

    // SS Value card hover
    document.querySelectorAll('.ss-value-card').forEach(card => {
        const icon = card.querySelector('.ss-value-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // SS Programs Section
    const ssPrograms = document.querySelector('.ss-programs');
    if (ssPrograms) {
        gsap.fromTo('.ss-programs-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: ssPrograms,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.ss-bento-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.ss-bento-grid',
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

    // SS Bento card hover
    document.querySelectorAll('.ss-bento-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // SS Process Section
    const ssProcess = document.querySelector('.ss-process');
    if (ssProcess) {
        gsap.fromTo('.ss-process-left', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: ssProcess,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.ss-timeline-item', 
            { opacity: 0, x: 30 },
            {
                scrollTrigger: {
                    trigger: '.ss-timeline',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // SS Impact Section
    const ssImpact = document.querySelector('.ss-impact');
    if (ssImpact) {
        gsap.fromTo('.ss-impact-item', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: ssImpact,
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

    // SS Testimonial Section
    const ssTestimonial = document.querySelector('.ss-testimonial');
    if (ssTestimonial) {
        gsap.fromTo('.ss-testimonial-quote', 
            { opacity: 0, scale: 0.5 },
            {
                scrollTrigger: {
                    trigger: ssTestimonial,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: 'back.out(2)'
            }
        );

        gsap.fromTo('.ss-testimonial blockquote', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: ssTestimonial,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.2,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.ss-testimonial-author', 
            { opacity: 0, y: 20 },
            {
                scrollTrigger: {
                    trigger: ssTestimonial,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.4,
                ease: 'power3.out'
            }
        );
    }

    // SS Contact Section
    const ssContact = document.querySelector('.ss-contact');
    if (ssContact) {
        gsap.fromTo('.ss-contact-info', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: ssContact,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.ss-contact-form-wrapper', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: ssContact,
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

    // SS CTA Section
    const ssCta = document.querySelector('.ss-cta');
    if (ssCta) {
        gsap.fromTo('.ss-cta-container', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: ssCta,
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

    // SS Timeline item hover
    document.querySelectorAll('.ss-timeline-content').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { x: 5, duration: 0.3, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { x: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // SS Checkbox hover
    document.querySelectorAll('.ss-checkbox').forEach(label => {
        label.addEventListener('mouseenter', () => {
            gsap.to(label, { scale: 1.02, duration: 0.2, ease: 'power2.out' });
        });
        label.addEventListener('mouseleave', () => {
            gsap.to(label, { scale: 1, duration: 0.2, ease: 'power2.out' });
        });
    });



    // ============================================
    // MEDIA PAGE ANIMATIONS
    // ============================================

    // Media Hero
    const mediaHero = document.querySelector('.media-hero');
    if (mediaHero) {
        const heroTl = gsap.timeline();
        
        heroTl.fromTo('.media-hero-label', 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        )
        .fromTo('.media-hero h1', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
            '-=0.2'
        )
        .fromTo('.media-hero-content > p', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.hero-stat-item', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        );
    }

    // Featured Section
    const featuredSection = document.querySelector('.featured-section');
    if (featuredSection) {
        gsap.fromTo('.featured-section .section-header-left', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: featuredSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.featured-card', 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.featured-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: 'power3.out'
            }
        );
    }

    // Press Section
    const pressSection = document.querySelector('.press-section');
    if (pressSection) {
        gsap.fromTo('.press-section .section-header-left', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: pressSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.press-card', 
            { opacity: 0, x: -30 },
            {
                scrollTrigger: {
                    trigger: '.press-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power3.out'
            }
        );
    }

    // Press card hover
    document.querySelectorAll('.press-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // News Section
    const newsSection = document.querySelector('.news-section');
    if (newsSection) {
        gsap.fromTo('.news-section .section-header-left', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: newsSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.news-filter', 
            { opacity: 0, y: 20 },
            {
                scrollTrigger: {
                    trigger: newsSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.2,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.news-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.news-grid',
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

    // News card hover
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Resources Section
    const resourcesSection = document.querySelector('.resources-section');
    if (resourcesSection) {
        gsap.fromTo('.resources-content', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: resourcesSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.resources-contact', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: resourcesSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.resource-item', 
            { opacity: 0, y: 20 },
            {
                scrollTrigger: {
                    trigger: '.resources-grid',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.4,
                ease: 'power3.out'
            }
        );
    }

    // Resource item hover
    document.querySelectorAll('.resource-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -3, duration: 0.25, ease: 'power2.out' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Media CTA
    const mediaCta = document.querySelector('.media-cta');
    if (mediaCta) {
        gsap.fromTo('.media-cta .cta-container', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: mediaCta,
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


    // ============================================
    // RESOURCES PAGE ANIMATIONS
    // ============================================

    // Resources Hero
    const resHero = document.querySelector('.res-hero');
    if (resHero) {
        const heroTl = gsap.timeline();
        
        heroTl.fromTo('.res-hero .hero-badge', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        )
        .fromTo('.res-hero h1', 
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.3'
        )
        .fromTo('.res-hero-left > p', 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.4'
        )
        .fromTo('.res-hero .hero-actions', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
            '-=0.3'
        );

        // Hero image
        gsap.fromTo('.res-hero .hero-image-wrapper img', 
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
        );

        gsap.fromTo('.res-hero .hero-stats-floating', 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.5)', delay: 0.8 }
        );
    }

    // Know Your Rights Section
    const kyrSection = document.querySelector('.kyr-section');
    if (kyrSection) {
        gsap.fromTo('.kyr-content .label-pill', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: kyrSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.kyr-content h2', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: kyrSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.1,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.kyr-text', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: kyrSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.2,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.kyr-point', 
            { opacity: 0, x: -40 },
            {
                scrollTrigger: {
                    trigger: '.kyr-points',
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

        gsap.fromTo('.kyr-image img', 
            { opacity: 0, x: 60 },
            {
                scrollTrigger: {
                    trigger: '.kyr-image',
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

    // Downloads Section
    const downloadsSection = document.querySelector('.downloads-section');
    if (downloadsSection) {
        gsap.fromTo('.downloads-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: downloadsSection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.download-card', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: '.downloads-grid',
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

    // Download card hover
    document.querySelectorAll('.download-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -6, duration: 0.25, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Emergency Section
    const emergencySection = document.querySelector('.emergency-section');
    if (emergencySection) {
        gsap.fromTo('.emergency-content', 
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: emergencySection,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.contact-card', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: '.contacts-grid',
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

        gsap.fromTo('.emergency-action-card', 
            { opacity: 0, x: 50 },
            {
                scrollTrigger: {
                    trigger: '.emergency-card-wrapper',
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

    // Resources FAQ Section
    const resFaqSection = document.querySelector('.faq-section');
    if (resFaqSection && document.querySelector('.res-hero')) {
        gsap.fromTo('.faq-header', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: resFaqSection,
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
                    trigger: '.faq-grid',
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
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -6, duration: 0.25, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Resources Partners Section
    const resPartnersSection = document.querySelector('.partners-section');
    if (resPartnersSection && document.querySelector('.res-hero')) {
        gsap.fromTo('.partners-container h3', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: resPartnersSection,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('.partner-logo', 
            { opacity: 0, y: 30 },
            {
                scrollTrigger: {
                    trigger: '.partners-logos',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.4,
                ease: 'power3.out'
            }
        );
    }

    // Resources CTA Section
    const resCta = document.querySelector('.res-cta');
    if (resCta) {
        gsap.fromTo('.res-cta .cta-content', 
            { opacity: 0, y: 40 },
            {
                scrollTrigger: {
                    trigger: resCta,
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


// ============================================
// INTERACTIVE FUNCTIONALITY FOR PROTOTYPE
// ============================================

// Form submission handling - show success message
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success-message';
        successMsg.innerHTML = `
            <div style="background: #10b981; color: white; padding: 20px 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
                <i class="ri-check-line" style="font-size: 32px; display: block; margin-bottom: 10px;"></i>
                <strong style="font-size: 1.1rem; display: block; margin-bottom: 5px;">Success!</strong>
                <span>Your submission has been received. We'll be in touch soon.</span>
            </div>
        `;
        
        // Replace form with success message
        this.style.display = 'none';
        this.parentNode.insertBefore(successMsg, this.nextSibling);
        
        // Animate success message
        gsap.fromTo(successMsg, 
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }
        );
    });
});

// Filter buttons functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active from all
        this.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active to clicked
        this.classList.add('active');
        
        // Animate click
        gsap.fromTo(this, 
            { scale: 0.95 },
            { scale: 1, duration: 0.2, ease: 'back.out(2)' }
        );
    });
});

// Donation amount selection
document.querySelectorAll('.amount-option input').forEach(input => {
    input.addEventListener('change', function() {
        const amount = this.value;
        const donateBtn = document.querySelector('.btn-donate span');
        if (donateBtn && amount !== 'custom') {
            donateBtn.textContent = `Donate $${amount}`;
        }
    });
});

// Donation type toggle
document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Load more button
document.querySelectorAll('.btn-load-more').forEach(btn => {
    btn.addEventListener('click', function() {
        this.innerHTML = '<i class="ri-loader-4-line" style="animation: spin 1s linear infinite;"></i> Loading...';
        setTimeout(() => {
            this.innerHTML = 'No more items to load';
            this.disabled = true;
            this.style.opacity = '0.6';
        }, 1500);
    });
});

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Dropdown menu functionality
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
        const menu = this.querySelector('.nav-dropdown-menu');
        if (menu) {
            gsap.fromTo(menu, 
                { opacity: 0, y: -10, display: 'block' },
                { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
            );
        }
    });
    
    dropdown.addEventListener('mouseleave', function() {
        const menu = this.querySelector('.nav-dropdown-menu');
        if (menu) {
            gsap.to(menu, { opacity: 0, y: -10, duration: 0.15, ease: 'power2.in', onComplete: () => {
                menu.style.display = 'none';
            }});
        }
    });
});

console.log('CAIR Michigan - Interactive prototype loaded successfully');
