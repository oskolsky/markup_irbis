//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. Router init
  // .. app.js
  //
  new App.Router();

  //
  // .. Toggle menu
  //
  $('.js-nav-toggle').on('click', function() {
    var $el = $('.nav');
    if ($el.is(':hidden')) {
      $el.slideDown();
      $(this).find('.ico').removeClass('ico__nav').addClass('ico__close');
      $('.header').find('.header_inner').css({backgroundColor: '#fff'});
    } else {
      $el.slideUp();
      $(this).find('.ico').removeClass('ico__close').addClass('ico__nav');
      $('.header').find('.header_inner').css({backgroundColor: ''});
    }
    return false;
  });

  //
  // .. Рorizontal paralax init
  //
  // $('.section.section__landing').parallax('50%', 0.5);

  //
  // .. Click on contacts item menu
  //
  $('.menu_i_a[href="/#/contacts/"]').on('click', function() {
    setContactsHeight()
  });

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
          1250: {
              items: 3,
              nav: true,
              navText: false
          },
          1500: {
              items: 4,
              nav: true,
              navText: false
          }
      }
  });

  //
  // .. Blog read more
  //
  $('.blog_i').find('.blog_i_readmore').on('click', function() {
    var $el = $(this).closest('.blog_i').find('.blog_i_more');
    if ($el.is(':hidden')) {
      $el.slideDown();
      $(this).text('Скрыть');
    } else {
      $el.slideUp();
      $(this).text('Показать полностью...');
    }
    return false;
  });

  //
  // .. Mask input
  //
  $('.form_tx_tag.form_tx_tag__phone').mask('+7 (999) 999-99-99');



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {

    //
    // .. о_О Reset contacts block O_o
    //
    setTimeout(function() {
      if ($(window).scrollTop() < ($(document).height() - $(window).height() * 2) && $('.section__contacts').hasClass('js-section-changed')) {
        $('.section__contacts').css({height: ''}).removeClass('js-section-changed');
      }    
    }, 300);

    //
    // .. Page on scroll
    //
    var
      services = $('#services').offset().top - 300,
      works    = $('#works').offset().top,
      blog     = $('#blog').offset().top,
      contacts = $('#contacts').offset().top,
      headerH = $('.header_inner').outerHeight()
      windowOffsetTop = $(window).scrollTop();

     
    if (windowOffsetTop < services) {

      location.href = '/#/';
      $('.menu').find('.menu_i_a__current').removeClass('menu_i_a__current');

    } else if (windowOffsetTop == ($(document).height() - $(window).height())) {

      location.href = '/#/contacts/';
      $('.menu').find('.menu_i_a__current').removeClass('menu_i_a__current');
      $('.menu').find('.menu_i_a[href="/#/contacts/"]').addClass('menu_i_a__current');

    } else if ((windowOffsetTop + headerH) >= services && (windowOffsetTop + headerH) < works) {

      location.href = '/#/services/';
      $('.menu').find('.menu_i_a__current').removeClass('menu_i_a__current');
      $('.menu').find('.menu_i_a[href="/#/services/"]').addClass('menu_i_a__current');
      
    } else if ((windowOffsetTop + headerH) >= works && (windowOffsetTop + headerH) < blog) {

      location.href = '/#/works/';
      $('.menu').find('.menu_i_a__current').removeClass('menu_i_a__current');
      $('.menu').find('.menu_i_a[href="/#/works/"]').addClass('menu_i_a__current');
      
    } else if ((windowOffsetTop + headerH) >= blog && (windowOffsetTop + headerH) < contacts) {

      location.href = '/#/blog/';
      $('.menu').find('.menu_i_a__current').removeClass('menu_i_a__current');
      $('.menu').find('.menu_i_a[href="/#/blog/"]').addClass('menu_i_a__current');

    }    

  });



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
$(window).load(function() {

  //
  // .. HASH
  //
  var hash = location.hash;  
  $('.menu_i_a[href="/' + hash + '"]').trigger('click');

  //
  // .. Set height map block
  //
  setMapHeight();

  //
  // .. Masonry init
  //
  $('.works').imagesLoaded(function() {
    $('.works').masonry({
      itemSelector: '.works_i'
    });  
  });

  //
  // .. Map
  //
  ymaps.ready(init);
    
  var myMap;

  function init() { 

    myMap = new ymaps.Map('map', {
      center: [59.87, 30.31],
      zoom: 13,
      controls: []
    });

    myMap.controls.add('zoomControl', {
      size: 'small'
    });

    myMap.behaviors.disable('scrollZoom');
  }

});



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

//
// .. Set height contacts & map block
//
function setMapHeight() {
  if (window.matchMedia) {
    if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      var height = getContentHeight();
      $('#map').height(height);
    }
  }
}

function setContactsHeight() {
  if (window.matchMedia) {
    if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      var height = getContentHeight();
      $('.section__contacts').height(height);
      $('.section__contacts').addClass('js-section-changed');
    }
  }
}

function getContentHeight() {
  if (window.matchMedia) {
    if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      var
        headerH = $('.header_inner').outerHeight(),
        footerH = $('#footer').outerHeight(),
        windowH = $(window).outerHeight();

      return windowH - headerH - footerH;
    }
  }
}