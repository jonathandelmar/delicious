(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Newsticker Active Code
    $.simpleTicker($("#breakingNewsTicker"), {
        speed: 1250,
        delay: 3500,
        easing: 'swing',
        effectType: 'roll'
    });

    // :: 3.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#deliciousNav').classyNav();
    }

    // :: 4.0 Search Active Code
    var searchwrapper = $('.search-wrapper');
    $('.search-btn').on('click', function () {
        searchwrapper.toggleClass('on');
    });
    $('.close-btn').on('click', function () {
        searchwrapper.removeClass('on');
    });

    // :: 6.0 Gallery Active Code
    if ($.fn.magnificPopup) {
        $('.videobtn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 8.0 CouterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: 10.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // :: 11.0 prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);