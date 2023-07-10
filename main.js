// navbar funcion scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('#logo');
    const scrollThreshold = 80;

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('navbar-scroll');
        logo.classList.add('logo-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
        logo.classList.remove('logo-scroll');
    }
});