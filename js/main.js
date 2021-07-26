$('#mostsearch').owlCarousel({
    loop:false,
    margin:16,
    nav:true,
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