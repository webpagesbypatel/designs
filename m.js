const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Function to toggle the mobile menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
        header.classList.remove('shadow-md');
    } else {
        header.classList.remove('shadow-lg');
        header.classList.add('shadow-md');
    }
});
