//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //
  // .. An on-demand sticky header
  // .. https://github.com/markgoodyear/headhesive.js/tree/master
  //
  var options = {
    offset: 0,
    classes: {
      clone:   'headhesive',
      stick:   'headhesive__stick',
      unstick: 'headhesive__unstick'
    }
  }
  var header = new Headhesive('#header', options);

  //
  // .. DD ScrollSpy Menu
  // .. http://www.dynamicdrive.com/dynamicindex1/ddscrollspymenu.htm
  //
  // $('.menu').ddscrollSpy({
  //   highlightclass: 'menu_i_a__current',
  //   scrolltopoffset: -$('#header').outerHeight()
  // });

  //
  // .. Toggle menu
  //
  $('.js-nav-toggle').on('click', function() {
    var $el = $('.nav');
    if ($el.is(':hidden')) {
      $el.slideDown();
      $(this).find('.ico').removeClass('ico__nav').addClass('ico__close');
    } else {
      $el.slideUp();
      $(this).find('.ico').removeClass('ico__close').addClass('ico__nav');
    }
    return false;
  });

  //
  // .. Рorizontal paralax init
  //
  // $('.section.section__landing').parallax('50%', 0.5);

  //
  // .. 2Gis map init
  //
  var map;

  DG.then(function() {
    map = DG.map('map', {
      center: [59.87, 30.31],
      zoom: 13,
      fullscreenControl: false,
      zoomControl: false,
      scrollWheelZoom: false,
      touchZoom: false,
      trackResize: true
    });
  }); 

  //
  // .. Contacts change background
  //
  $('.contacts').find('.contacts_header').css({backgroundImage: 'url(/assets/images/place' + getRandomInt(1, 6) + '_2x.png)'});

  //
  // .. Set height contacts block
  //
  $('.menu_i_a[href="#contacts"]').on('click', function() {
    setContactsHeight();
  });

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



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {

    //
    // .. о_О Reset contacts block O_o
    //
    if ($(window).scrollTop() < ($(document).height() - $(window).height() * 2) && $('#contacts').hasClass('js-section-changed')) {
      $('#contacts').css({height: ''}).removeClass('js-section-changed');
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
      $('#contacts').height(height);
      setTimeout("$('#contacts').addClass('js-section-changed');", 1000)
    }
  }
}

function getContentHeight() {
  if (window.matchMedia) {
    if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      var
        headerH = $('#header').outerHeight(),
        footerH = $('#footer').outerHeight(),
        windowH = $(window).outerHeight();

      return windowH - headerH - footerH;
    }
  }
}