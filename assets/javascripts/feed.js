$(function() {

  $('.js-feed-load').on('click', function() {
    
    var
      destination = $('.works > .works_i:last-child').offset().top - $('#header').outerHeight();

    $('html, body').animate({scrollTop: destination}, 500);

    setTimeout('loadFeed()', 400)

    return false;
  });

});

function loadFeed() {
  $.ajax({
      url: '/data/portfolio_feed.html',
      data: {},
      success: function(response) {

        var $newItems = $(response);

        $('.works').append($newItems).imagesLoaded(function() {

          $('.works').masonry('appended', $newItems);

        });

      },
      error: function() {
        alert('Error load materials');
      }
  });
}