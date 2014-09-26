//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. Paralax background on home page
  //
  $('#parallax').parallax({
    'elements': [
      {
        'selector': '.parallax_layer.parallax_layer__bg',
        'properties': {
          'x': {
            'background-position-x': {
              'initial': 0,
              'multiplier': 0.02,
              'invert': true
            }
          }
        }
      },
      {
        'selector': '.parallax_layer.parallax_layer__title',
        'properties': {
          'x': {
            'left': {
              'initial': 0,
              'multiplier': 0.03,
              'invert': true
            }
          }
        }
      },
      {
        'selector': '.parallax_layer.parallax_layer__awward',
        'properties': {
          'x': {
            'left': {
              'initial': 0,
              'multiplier': 0.01,
              'invert': true
            }
          }
        }
      }
    ]
  });

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
$(window).load(function() {

});