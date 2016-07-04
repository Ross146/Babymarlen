$(document).ready(function(){
    $('.section-slider').owlCarousel({
        items: 1,
        loop: true
    });

    $('.most-wish .goods').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        margin: 20
    });

    function initBrandCarousel() {
        var $owlCarousel = $('.brands-carousel-container');
        var items = ($(window).width() < 900)? 5 : ($(window).width() < 1260)? 4: 6;
        function initCarousel() {
            $owlCarousel.owlCarousel({
                items: items,
                dots:false,
                loop: true,
                nav: true,
                autoplay: true
            });
        }

        function destroyCarousel() {
            $owlCarousel.trigger('destroy.owl.carousel');
            $owlCarousel.html($owlCarousel.find('.owl-stage-outer').html()).removeClass('owl-loaded');
        }

        function refreshCarousel() {
            destroyCarousel();
            initCarousel();
        }

        refreshCarousel();
    }

    $(window).resize(function() {
        initBrandCarousel();
    });

    initBrandCarousel();

});