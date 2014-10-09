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
    offset: 300,
    classes: {
      clone:   'headhesive',
      stick:   'headhesive__stick',
      unstick: 'headhesive__unstick'
    }
  }
  var header = new Headhesive('#header', options);

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
          740: {
              items: 2,
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

//
// .. Set height contacts block
//
function setContactsHeight() {
  var
    headerH = $('#header').outerHeight(),
    footerH = $('#footer').outerHeight(),
    windowH = $(window).outerHeight();

  var total = windowH - headerH - footerH;
  $('#contacts').height(total);
  setTimeout("$('#contacts').addClass('js-section-changed');", 1000)
}