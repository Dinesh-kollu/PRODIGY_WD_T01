document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #0072ff, #00c6ff)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #00c6ff, #0072ff)';
        }
    });

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.color = '#ffeb3b';
        });

        item.addEventListener('mouseout', function() {
            item.style.color = 'white';
        });
    });
});