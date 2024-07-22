
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Puedes ajustar el valor según tu preferencia
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('navbar-normal');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('navbar-normal');
        }
    });
});