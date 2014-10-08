//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. Contacts change background
  //
  $('.contacts').find('.contacts_header').css({backgroundImage: 'url(/assets/images/place' + getRandomInt(1, 6) + '_2x.png)'});

  //
  // .. OWL Carousel init
  //
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true,
              navText: false
          },
          939: {
              items: 2,
              nav: true,
              navText: false
          }
      }
  });



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {});
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {});



//****************************************************************************************************
//
// .. FUNCTION
//
//****************************************************************************************************
//
// .. Get random
//
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}