$(function () {
    $('.tlt').textillate(
      { loop: true,
        minDisplayTime: 10000,
        in: { effect: 'fadeInUp', sync: true },
        out: {
          effect: 'fadeOutUp',
          sync: true
        }
      }
    );

    var shelfWidth = function () {
      console.log(document.body.clientWidth);
      if (document.body.clientWidth > 1200) {
        $('k-shelf').css({
          'width': '1200px',
          'border-top-left-radius': '6px',
          'border-top-right-radius': '6px'
        });
      } else {
        $('k-shelf').css({
          'width': '100%',
          'border-top-left-radius': '0px',
          'border-top-right-radius': '0px'
        });
      }
    };


    $( window ).resize(function() {
      shelfWidth();
    });

    shelfWidth();

// $(window).scroll(function() {
//       $('#kribleShelf').removeClass('fadeInUp');
//       $('#kribleShelf').addClass('fadeOutDown');
//       clearTimeout($.data(this, 'scrollTimer'));
//       $.data(this, 'scrollTimer', setTimeout(function() {
//           $('#kribleShelf').removeClass('fadeOutDown');
//           $('#kribleShelf').addClass('fadeInUp');
//       }, 1000));
// });

$( ".close" ).click(function() {
    $(this).parent().hide();
});

$( ".click" ).click(function() {
  $(".bubble").hide();
  var bubble = $(this).children( ".bubble" );
  bubble.show();
  bubble.css({'margin-left': (bubble.outerWidth()-$(this).outerWidth())/2*-1});
});
})
