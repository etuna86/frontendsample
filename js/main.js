$('#mostsearch').owlCarousel({
    loop:false,
    margin:16,
    nav:false,
    items:5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



$('#jobadv').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    dots:false,
    items:6,
    navText:['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();

    $('.detail-search').click(function(){
        $('.detail-search-section').toggleClass('open');
        $('.search-section').toggleClass('open');
    });
    $('.close-search-detail').click(function(){
        $('.detail-search-section').removeClass('open');
        $('.search-section').removeClass('open');
    });
    
    $('.mobile-menu-btn').click(function(){
        $('.main-menu').toggleClass('open');
    });

});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $( "header" ).addClass("header-blue");
    } else {
        $( "header" ).removeClass("header-blue");

    }
})