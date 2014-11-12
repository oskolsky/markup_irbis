$(function() {

  var i = 0;

  $('.js-feed-load').on('click', function() {

    i++;

    var
      destination = $('.works > .works_i:last-child').offset().top - $('.header_inner').outerHeight();

    $('html, body').animate({scrollTop: destination}, 500);

    setTimeout('loadFeed()', 400)

    if (i == 2) {
      $('.feed-load').remove();
      $('.works').addClass('works__off');
    }

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