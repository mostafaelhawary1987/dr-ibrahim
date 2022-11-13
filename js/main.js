

$(document).ready(function(){


   
//Special offers slider Transparency functions
function transp() {
    var xx = $('.documents .owl-item.active');
    xx.first().find('.document-item').addClass('transp');
    xx.last().find('.document-item').addClass('transp');
}

function untransp() {
    $('.documents .owl-item').each(function () {
        $(this).find('.document-item').removeClass('transp');
    });
}

function transplg() {
    var xx = $('.documents .owl-item.active');
    xx.first().find('.document-item').addClass('transp');
    xx.last().find('.document-item').addClass('transp');
}

//Special offer slider
if(document.dir=="rtl"){
    var dir_d=true;
}
else{
    var dir_d=false;
}
$(".documents .owl-carousel").owlCarousel({
    autoplay:true,
    loop: true,
    nav: false,
    dots: true,
    margin: 22,
    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
    center: true,
    rtl:dir_d,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 2,
            dots: true
        },
        768: {
            items: 2,
            dots: true
        },
        991: {
            items: 3,
            center: true,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1199: {
            items: 4,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1400: {
            items: 4,
            onInitialized: transplg,
            onTranslate: untransp,
            onTranslated: transplg,
            onDragged: untransp
        }
    }
});
//Special offers slider Transparency functions
// function transp() {
//     var xx = $('.lattest-slider .owl-item.active');
//     xx.first().find('.lattest-item').addClass('transp');
//     xx.last().find('.lattest-item').addClass('transp');
// }

function untransp() {
    $('.lattest-slider .owl-item').each(function () {
        $(this).find('.lattest-item').removeClass('transp');
    });
}

function transplg() {
    var xx = $('.lattest-slider .owl-item.active');
    xx.first().find('.lattest-item').addClass('transp');
    xx.last().find('.lattest-item').addClass('transp');
}

//Special offer slider

$(".lattest-slider .owl-carousel").owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: true,
    margin: 22,
   
    
    rtl:dir_d,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 2,
            dots: true
        },
        768: {
            items: 2,
            dots: true
        },
        991: {
            items: 3,
            center: true,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1199: {
            items: 3,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1400: {
            items: 3,
            onInitialized: transplg,
            onTranslate: untransp,
            onTranslated: transplg,
            onDragged: untransp
        }
    }
});
//Special offers slider Transparency functions
// function transp() {
//     var xx = $('.lattest-slider .owl-item.active');
//     xx.first().find('.lattest-item').addClass('transp');
//     xx.last().find('.lattest-item').addClass('transp');
// }

function untransp() {
    $('.anew-slider .owl-item').each(function () {
        $(this).find('.anew-item-item').removeClass('transp');
    });
}

function transplg() {
    var xx = $('.anew-slider .owl-item.active');
    xx.first().find('.anew-item-item').addClass('transp');
    xx.last().find('.anew-item-item').addClass('transp');
}

//Special offer slider

$(".anew-slider .owl-carousel").owlCarousel({
    autoplay:true,
    loop: true,
    responsiveClass:true,
    nav: true,
    dots: true,
    margin: 22,
    
    
    rtl:dir_d,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 2,
            dots: true
        },
        768: {
            items: 2,
            dots: true
        },
        991: {
            items: 3,
            center: true,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1199: {
            items: 3,
            onInitialized: transp,
            onTranslate: untransp,
            onTranslated: transp,
            onDragged: untransp
        },
        1400: {
            items: 3,
            onInitialized: transplg,
            onTranslate: untransp,
            onTranslated: transplg,
            onDragged: untransp
        }
    }
});

    // $(window).scroll(function () {
    //     $(this).scrollTop() >= 1 ? $(".header").addClass("scroll") : $(".header").removeClass("scroll");
    // }),
    // $('a[href^="#"]').on("click", function (e) {
    //     e.preventDefault(),
    //         $(document).off("scroll"),
    //         $("a")
    //             .parent()
    //             .each(function () {
    //                 $(this).removeClass("active");
    //             }),
    //         $(this).parent().addClass("active");
    //     var i = this.hash;
    //     ($target = $(i)),
    //         $("html, body")
    //             .stop()
    //             .animate({ scrollTop: $target.offset().top + 2 }, 900, "swing", function () {
    //                 window.location.hash = i;
    //             });
    // });
$("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});


});

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 50 ) {
//         $('.scrolltop:hidden').stop(true, true).fadeIn();
//     } else {
//         $('.scrolltop').stop(true, true).fadeOut();
//     }
// });
// $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:0},"1000");return false})})


$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");


    });
});


if ($(window).width() <= 768){ 
    $(".wow").removeClass("wow");
    }

