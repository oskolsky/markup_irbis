//****************************************************************************************************
//
// .. INIT
//
//****************************************************************************************************
//
// .. arcticModal
//
$.arcticmodal('setDefault', {
  overlay: {
    css: {
      backgroundColor: '#0b5ed8',
      opacity: 0.95
    }
  },
  openEffect: {
    speed: 200
  },
  closeEffect: {
    speed: 200
  }
});

//
// .. Accounting
//
accounting.settings = {
  currency: {
    decimal: '.',
    thousand: ' ',
    precision: 2
  },
  number: {
    decimal : '.',
    thousand: ' ',
    precision: 0
  }
};



//****************************************************************************************************
//
// .. FUNCTIONS
//
//****************************************************************************************************
//
// .. Accounting
//
function formatNumber() {
  $('.format-number').each(function() {
    var
      number = parseInt($(this).text().replace(new RegExp(' ', 'g'), '')),
      formatNumber = accounting.formatNumber(number);

    $(this).text(formatNumber);
  });
}

function formatMoney() {
  $('.format-money').each(function() {
    var c = accounting.settings.currency;

    if ($(this).hasClass('format-money__rub')) {
      c.format = '%v';
    } else if ($(this).hasClass('format-money__usd')) {
      c.symbol = '$';
      c.format = '%s%v';
    } else if ($(this).hasClass('format-money__eur')) {
      c.symbol = '€';
      c.format = '%s%v';
    }

    var
      money = parseFloat($(this).text().replace(new RegExp(' ', 'g'), '')),
      formatMoney = accounting.formatMoney(money);
    
    if ($(this).hasClass('format-money__rub')) {
      $(this).text(formatMoney).append('&nbsp;<span class="rub">Р</span>');
    } else {
      $(this).text(formatMoney);
    }
  });
}



//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Open dialog
//
$(document).on('click touchstart', '[data-dialog="open"]', function() {
  // if (window.matchMedia) {
    // if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      var url = $(this).data('url');
    
      $.arcticmodal('close');

      $.arcticmodal({
        type: 'ajax',
        url: url
      });
      
      return false;
    // }
  // }
});

//
// .. Close dialog
//
$(document).on('click touchstart', '[data-dialog="close"]', function() {
  // if (window.matchMedia) {
    // if (matchMedia('all and (min-width: ' + config.matchMedia.desktop.minWidth + 'px)').matches) {
      $.arcticmodal('close');

      return false;
    // }
  // }
});



//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {

  //****************************************************************************************************
  //
  // .. DOUBLE HOVER
  //
  //****************************************************************************************************
  doubleHover('a.double-hover', 'hover');



  //****************************************************************************************************
  //
  // .. FORMS
  // .. $('#checkbox').customForm() to init single element; $('body').customForm() to init all elements
  //
  //****************************************************************************************************
  $('.js-form').customForm();



  //****************************************************************************************************
  //
  // .. SCROLL TO
  //
  //****************************************************************************************************
  $('a[data-scroll="true"]').on('click touchstart', function() {
    var
      anchor = $(this).attr('href'),
      offset = $(this).data('offset') || 0,
      destination = $(anchor).offset().top - offset;
    
    $('html, body').animate({scrollTop: destination}, 500);
    
    return false;
  });



  //****************************************************************************************************
  //
  // .. ACCOUNTING
  //
  //****************************************************************************************************
  formatNumber();
  formatMoney();
  


  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {

    // $('#header').stickyHeader();
    $('#footer').stickyFooter();

  });
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {

  // $('#header').stickyHeader();
  $('#footer').stickyFooter();

});