$(document).ready(function() {
    // Preloader
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

    // Navigation toggle
    $('.nav-toggle').click(function() {
        $(this).toggleClass('open');
        $('.nav').toggleClass('open');
    });

    // Smooth scrolling
    $('.nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
        return false;
    });

    // Lightbox functionality
    $('.service-item-inner, .work-item-inner').click(function() {
        var imgSrc = $(this).find('img, video').attr('src');
        var captionText = $(this).find('h3, h4').text();
        $('.lightbox-img').attr('src', imgSrc);
        $('.lightbox-caption').text(captionText);
        $('.lightbox').fadeIn();
    });

    $('.lightbox-close, .lightbox').click(function() {
        $('.lightbox').fadeOut();
    });

    // Contact form dialog
    $('#button').click(function() {
        $('#dialog').dialog({
            modal: true,
            buttons: {
                Ok: function() {
                    $(this).dialog('close');
                }
            }
        });
    });
});
