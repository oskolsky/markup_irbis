//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. Navigation click
  //
  $('.js-nav-toggle').on('click', function() {
    var $el = $('.nav.nav__touch');
    if ($el.is(':hidden')) {
      $el.show(0, function() {
        $('#header').css({top: 352});
      });
    } else {
      $el.hide(0, function() {
        $('#header').css({top: 0});
      });
    }
    return false;
  });

  //
  // .. Yandex map for contacts block on index page
  //
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.87, 30.31],
      zoom: 13,
      controls: [false]
    });
  }

  //
  // .. OWL Carousel init
  //
  $('.owl-carousel').owlCarousel({
    responsive:{
        0:{
            items:1
        },
        939:{
            items:2
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
  $(window).smartresize(function() {
    $('.nav.nav__touch').hide(0, function() {
      $('#header').css({top: 0});
    });
  });
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {});