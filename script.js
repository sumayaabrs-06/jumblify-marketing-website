// Add smooth scrolling and interactive effects
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(215, 206, 192, 0.98)';
        } else {
            nav.style.background = '#D7CEC0';
        }
    });

    // Add click handlers for navigation links
    document.querySelectorAll('.nav-links a:not(.download-btn)').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});