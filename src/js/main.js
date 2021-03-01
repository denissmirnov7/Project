$(document).ready(function(){

    $('.burger-menu').on('click',function () {
        $('.burger-menu').toggleClass('active')
        $('.header .nav').toggleClass('active')
    })

    var den1 = $('#slider');
    den1.owlCarousel( {
        items: 2,
        loop:true,
        dots:false,
        autoHeight:true,
    });
// Go to the next item
    $('.owlNextBtn').click(function() {
        den1.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owlPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        den1.trigger('prev.owl.carousel', [300]);
    })
//
//
    $('ul.catalog-tabs__caption').on('click', 'li:not(.catalog-tabs__tab_active)', function() {
        $(this)
            .addClass('catalog-tabs__tab_active').siblings().removeClass('catalog-tabs__tab_active')
            .closest('div.catalog-tabs').find('div.catalog-tabs__content').removeClass('catalog-tabs__content_active').eq($(this).index()).addClass('catalog-tabs__content_active');
    });
//
    var den = $('#slider2');
    den.owlCarousel( {
        items: 1,
        loop:true,
        dots:false,
        autoHeight:true,
    });
// Go to the next item
    $('.owl1NextBtn').click(function() {
        den.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl1PrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        den.trigger('prev.owl.carousel', [300]);
    })
});





