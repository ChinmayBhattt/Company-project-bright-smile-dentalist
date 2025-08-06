// Main JavaScript for Smile Bright Dental Clinic Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('open');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                }
            }
        });

        // Close mobile menu when clicking on a mobile nav link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('open');
                
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);

    // Testimonial Slider
    const testimonialSlides = document.querySelector('.testimonial-slides');
    const testimonialSlideItems = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (testimonialSlides && testimonialSlideItems.length > 0) {
        let currentSlide = 0;
        const slideWidth = 100; // percentage
        const totalSlides = testimonialSlideItems.length;
        
        // Set initial position
        updateSliderPosition();
        
        // Update active dot
        updateActiveDot();
        
        // Previous button click
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSliderPosition();
                updateActiveDot();
            });
        }
        
        // Next button click
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSliderPosition();
                updateActiveDot();
            });
        }
        
        // Dot click
        if (dots) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    currentSlide = index;
                    updateSliderPosition();
                    updateActiveDot();
                });
            });
        }
        
        // Auto slide every 5 seconds
        setInterval(function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSliderPosition();
            updateActiveDot();
        }, 5000);
        
        // Helper functions
        function updateSliderPosition() {
            // For desktop: show 3 slides at once (33.33% each)
            // For tablet: show 2 slides at once (50% each)
            // For mobile: show 1 slide at once (100% each)
            let slidePercentage;
            
            if (window.innerWidth >= 1024) {
                // Desktop
                slidePercentage = 33.33;
            } else if (window.innerWidth >= 768) {
                // Tablet
                slidePercentage = 50;
            } else {
                // Mobile
                slidePercentage = 100;
            }
            
            const offset = -currentSlide * slidePercentage;
            testimonialSlides.style.transform = `translateX(${offset}%)`;
        }
        
        function updateActiveDot() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Update slider on window resize
        window.addEventListener('resize', updateSliderPosition);
    }

    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointment-form');
    const successModal = document.getElementById('success-modal');
    const closeModal = document.getElementById('close-modal');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server here
            // For this static website, we'll just show the success modal
            
            if (successModal) {
                successModal.classList.remove('hidden');
            }
            
            // Reset form
            appointmentForm.reset();
        });
    }
    
    if (closeModal && successModal) {
        closeModal.addEventListener('click', function() {
            successModal.classList.add('hidden');
        });
        
        // Close modal when clicking outside
        successModal.addEventListener('click', function(e) {
            if (e.target === successModal) {
                successModal.classList.add('hidden');
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add hover class to service cards
    const serviceCards = document.querySelectorAll('#services .rounded-lg');
    serviceCards.forEach(card => {
        card.classList.add('service-card');
    });

    // Add hover zoom effect to images
    const images = document.querySelectorAll('#about img, #testimonials img');
    images.forEach(img => {
        img.classList.add('hover-zoom');
    });

    // Add social icon class to social media links
    const socialIcons = document.querySelectorAll('footer .flex.space-x-4 a, #contact .flex.space-x-4 a');
    socialIcons.forEach(icon => {
        icon.classList.add('social-icon');
    });

    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.bg-primary');
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Book Appointment') || button.textContent.includes('Submit Appointment')) {
            button.classList.add('pulse');
        }
    });
});