// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});

const menuItems = document.querySelectorAll('#navbar a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#ff6b81';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#fff';
    });
});

// Responsive menu for smaller screens
const navbar = document.querySelector('.navbar ul');
document.querySelector('.navbar .logo').addEventListener('click', () => {
    navbar.classList.toggle('active');
});
