// Mobile Menu Toggle - Fixed version
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) {
        console.error('Hamburger or nav menu element not found');
        return;
    }
    
    // Function to toggle menu
    function toggleMenu() {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    }
    
    // Event listener for hamburger menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.hamburger')) {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Add active class to current page link
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-link');
    
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('active');
        }
    }
});