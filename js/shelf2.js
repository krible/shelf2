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
})
