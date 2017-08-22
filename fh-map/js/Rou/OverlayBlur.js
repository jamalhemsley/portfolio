var Rou = Rou || {};

Rou.OverlayBlur = (function($) {

  var to;

  return {
    start: function() {
      //$('body').append('<div class="c-overlay-blur"></div>');
      clearTimeout(to);

      var $overlay = $('.c-overlay-blur');

      $overlay.css({
        top: $('.c-header').outerHeight(),
        height: $(document).height(),
        display: 'block'
      });

      setTimeout(function() {
        $overlay.addClass('is-visible');
      }, 1);

    },
    stop: function() {
      
      var $overlay = $('.c-overlay-blur');

      $overlay.removeClass('is-visible');
      
      to = setTimeout(function() {
        
        $overlay.css({
          display: 'none'
        });

      }, 1000);
    }
  };
})(jQuery);