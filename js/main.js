$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin:10,
    loop:true,
    nav: true,
    dots:false,
    navText: ['<img src="../assets/images/arrow-left.svg"/>', '<img src="../assets/images/arrow-right.svg"/>'],
    autoplay:true,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1300:{
            items:4,
        },
    }
  });
});
