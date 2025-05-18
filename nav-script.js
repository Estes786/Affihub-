// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.navbar-content')) {
                navLinks.classList.remove('show');
            }
        });
    }
    
    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') || 
            (currentPage === '/' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
});
