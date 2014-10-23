// (function($){
//   $(window).load(function(){
    
//     /* Page Scroll to id fn call */
//     $('#menu a[data-rel="scrollTo"]').mPageScroll2id({
//       highlightClass: 'menu_i_a__current',
//       scrollSpeed: 600,
//       offset: '.header_inner'
//     });
    
//     /* jquery.address fn */
//     $.address.change(function(event) {
//       var hash = event.value.split('/')[1];
//       $.mPageScroll2id('scrollTo', hash, {
//         clicked: $('a[href="/#' + hash + '"]')
//       });
//     });
    
//     $('#menu a[data-rel="scrollTo"]').click(function(e) {
//       e.preventDefault();

//       var href = '/' + $(this).attr('href').substr(1) + '/';

//       if($.address.value() === href) {
//         $.address.history(false); 
//       } else {
//         $.address.history(true); 
//       }

//       $.address.value(href);
//     });
    
//   });
// })(jQuery);