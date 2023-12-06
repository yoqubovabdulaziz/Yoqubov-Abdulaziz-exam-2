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

$(document).ready(function(){
  $("#photo-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: false,
    autoplay:true,
    autoplayTimeout: 1000,
    responsive: {
        200:{
            items: 1,
        },
        
        500:{
            items: 2,
        },

        800:{
            items: 3,
        },
    },
  });
});


// NAVBAR SHRINK

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}


// DARK MODE

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./assets/images/light.svg";
  } else {
    this.firstElementChild.src = "./assets/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

// BACKTOP 

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

// LOADING

const loading = document.getElementById("loading");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 2000);

window.addEventListener("scroll", function () {
  shrink();
});