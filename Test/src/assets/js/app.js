var $ = require("jquery");



$(document).ready(function () {
    $('.slider__list').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3.5,
        arrows: true,


        prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/slider/slick-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/images/slider/slick-next.svg" alt=""></button>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },


        ],


    });




    $('.benefits__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-prev--benefits"><img src="assets/images/slider/slick-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--benefits"><img src="assets/images/slider/slick-next.svg" alt=""></button>',
    });



    $('.clients__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,


        prevArrow: '<button type="button" class="slick-prev slick-prev--clients"><img src="assets/images/slider/slick-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--clients"><img src="assets/images/slider/slick-next.svg" alt=""></button>',
    });

})