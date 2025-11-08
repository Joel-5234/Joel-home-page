// Smooth scrolling for navigation links
// This function makes clicking navigation links scroll smoothly to the target section

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump behavior
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If the target section exists, scroll to it smoothly
            if (targetSection) {
                // Calculate offset to account for fixed navbar
                const navbarHeight = document.querySelector('#navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Smooth scroll for "View My Projects" button
    const viewProjectsBtn = document.querySelector('.btn-primary[href="#projects"]');
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                const navbarHeight = document.querySelector('#navbar').offsetHeight;
                const targetPosition = projectsSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Back to top button functionality
    // This shows/hides the back to top button based on scroll position
    const backToTopButton = document.getElementById('back-to-top');
    
    // Function to show or hide the back to top button
    function toggleBackToTopButton() {
        // If user has scrolled down more than 300 pixels, show the button
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Check scroll position when page loads
    toggleBackToTopButton();
    
    // Check scroll position whenever user scrolls
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // When back to top button is clicked, scroll smoothly to top
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Optional: Add active state to navigation links based on scroll position
    // This highlights which section the user is currently viewing
    const sections = document.querySelectorAll('.section');
    
    function updateActiveNavLink() {
        let currentSection = '';
        
        // Find which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('#navbar').offsetHeight;
            
            // Check if section is in viewport
            if (window.scrollY >= (sectionTop - navbarHeight - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active state on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call once on page load
});

