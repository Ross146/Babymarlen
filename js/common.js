(function(){
    function gallerySlide($gallerySlide) {



        if ($(window).width() > 500 && !!$gallerySlide.find(('.owl-stage-outer').length)){
            $gallerySlide.trigger('destroy.owl.carousel');
            $gallerySlide.html($gallerySlide.find('.owl-stage-outer').html()).removeClass('owl-loaded');
            $gallerySlide.removeClass('owl-carousel');
            return;
        }
        $gallerySlide.owlCarousel({
            items: 2,
            loop: true,
            responsive: false,
            center: true
        });

    }

    $(document).ready(function(){
        $('.section-slider').owlCarousel({
            items: 1,
            loop: true
        });

        gallerySlide($('.instagram-gallery .photo-container'));

        $(window).resize(function () {
            gallerySlide($('.instagram-gallery .photo-container'));
        })
    });


})();

