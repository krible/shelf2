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

    $(window).scroll(function() {
      $('#kribleShelf').removeClass('fadeInUp');
      $('#kribleShelf').addClass('fadeOutDown');
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
          $('#kribleShelf').removeClass('fadeOutDown');
          $('#kribleShelf').addClass('fadeInUp');
      }, 1000));
});

$( ".click" ).click(function() {
  $(".bubble").hide();
  var bubble = $(this).children( ".bubble" );
  bubble.show();
  bubble.css({'margin-left': (bubble.outerWidth()-$(this).outerWidth())/2*-1});
});
})
