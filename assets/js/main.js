$(document).ready(function() {
     /* ----- navbar shrink------- */
        $(window).scroll("scroll",function() {
            if ($(this).scrollTop() > 90) {
                $('.navbar').addClass("navbar-shrink");
            } else {
                $('.navbar').removeClass('navbar-shrink');
            }  
        });
            
    /* ----------Features carousel------ */
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /* ----------Screenshots carousel------ */
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
    
    /* ----------Testimonials carousel------ */
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    
    /* ----------Testimonials carousel------ */
    $('.team-carousel').owlCarousel({
        // loop:true,
        margin:0,
        // autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    /* ----------Page Scrolling - ScroIIit------ */
    $.scrollIt({
        topOffset: -50
    });

});

