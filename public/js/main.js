$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

        responsive: {
            // * Screen Smail
            0: { nav: false, },
            // * Screen md
            768: { nav: true, }
        }
    });
});


var option={
    strings: [
        'Web Developer .',
        'Web Desgin',
        'Network Engineer',
        
      ],
      typeSpeed: 100,
      loop:true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      showCursor: false,
}
var typed = new Typed('.element', option);




var myElement = document.querySelector(".navbar-headroom");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();


// * color-mode
$(document).ready(function () {
  $('.color-mode').click(function (e) { 
       $('body').toggleClass('dark-mood');
        
    });
});