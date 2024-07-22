document.addEventListener('DOMContentLoaded', function () {
    var techCarousel = document.querySelector('#techCarouselFade');
    var carousel = new bootstrap.Carousel(techCarousel, {
        interval: 5000, // Cambia el valor para ajustar el tiempo entre slides (en milisegundos)
        wrap: true // Permite que el carrusel vuelva al inicio después del último slide
    });

    techCarousel.addEventListener('slid.bs.carousel', function () {
        var items = techCarousel.querySelectorAll('.carousel-item');
        items.forEach(function (item) {
            item.querySelector('.carousel-text').classList.remove('animate__flipInX');
            void item.querySelector('.carousel-text').offsetWidth; // Trigger reflow
            item.querySelector('.carousel-text').classList.add('animate__flipInX');
        });
    });
});