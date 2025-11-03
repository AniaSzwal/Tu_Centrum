// JavaScript for Tu Centrum Terapii website

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', () => {
        const navList = navbar.querySelector('ul');
        navList.classList.toggle('show');
        navToggle.classList.toggle('open');
    });

    // Animate hamburger icon when open
    navToggle.addEventListener('click', () => {
        const hamburger = navToggle.querySelector('.hamburger');
        hamburger.classList.toggle('active');
    });

    // Close nav when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const navList = navbar.querySelector('ul');
        if (!navbar.contains(e.target) && navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});