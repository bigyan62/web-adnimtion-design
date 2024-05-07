jQuery(function ($) {

    $(document).ready(function(){
        $('.hamburger-menu').click(function(){
            $(this).toggleClass('active');
            $('body').toggleClass('nav-active');
        });
    });

    $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).scroll(function () {
    if ($('.work-section').isInViewport()) {
        $('.spining-img').addClass('sticky');
    }
    else {
        $('.spining-img').removeClass('sticky');
    }
        var val = 0.05 * $(window).scrollTop();
        var neg = -10;
        var a = val + neg + "deg";
        $('.spining-img.sticky').css('transform', 'rotate(' + a + ')');
    });
});