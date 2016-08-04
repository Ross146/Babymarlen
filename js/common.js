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
        $('.designers .tab .head').click(function(){
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

    var Filters = {};
    Filters.filterHide = function(){
        $('.filter-container .head-text').click(function(){
                $(this).parent().toggleClass('hidden').addClass('active').siblings().removeClass('active').parent().parent().addClass('no-max-height');
        });

        if($(window).width() <= 500){
            $('.filter-container .filter').removeClass('active');
            $('.filter-container .inner-head-text').click(function(e){
                if($(window).width() <= 500){
                    $(this).parent().parent().removeClass('active').parent().parent().removeClass('no-max-height');
                }
            })
        }
        if ($(window).width() <= 900 && $(window).width() > 500) {
            $('.filter-container .filter:first-child').addClass('active').siblings().removeClass('active');

        }
    };

    Filters.openMobile = function() {
        $('.mobile-filter-btn').click(function(){
            $('body').addClass('openfilter');
        });

        $('.checked-filters .submit').click(function() {
            $('body').removeClass('openfilter');
        })
    };


    $('.section-slider').owlCarousel({
        items: 1,
        loop: true
    });

    gallerySlide($('.instagram-gallery .photo-container'));


    toogleDesignersTabs();
    calcDesignersTablesColums();
    Filters.filterHide();
    Filters.openMobile();

    $(window).resize(function () {
        gallerySlide($('.instagram-gallery .photo-container'));
        toogleDesignersTabs();
        Filters.filterHide();
    });
})();

Filters = {};



