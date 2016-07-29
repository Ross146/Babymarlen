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



    function toogleDesignersTabs () {
        ($(window).width() <=500)? $('.designers .tab').removeClass('active'): $('.designers .tab:first-child').addClass('active').siblings().removeClass('active') ;
        $('.designers .tab .head').mouseenter(function(){
            var $this = $(this);
            if($(window).width() <= 500 && $this.parent().hasClass('active')){
                $this.parent().removeClass('active');
            } else{
                $this.parent().addClass('active').siblings().removeClass('active');
            }
        })
    }

    function calcDesignersTablesColums () {
        $('.designers .tab').each(function () {
            var count = 0;
            var $items = $(this).find('.tab-content.desktop li');
            var $tableContainerUl = $(this).find('.tab-content.tablet ul');
            var $numberColumn = Math.ceil($(this).find('li').length/4);
            for(var i =0; i< $tableContainerUl.length; i ++){
                for(var j = 0 ; j< $numberColumn; j++) {
                    $tableContainerUl.eq(i).append($items.eq(count++).clone())
                }
            }
        });
    };

    $('.section-slider').owlCarousel({
        items: 1,
        loop: true
    });

    gallerySlide($('.instagram-gallery .photo-container'));


    toogleDesignersTabs();
    calcDesignersTablesColums();

    $(window).resize(function () {
        gallerySlide($('.instagram-gallery .photo-container'));
        toogleDesignersTabs();
    });
})();

