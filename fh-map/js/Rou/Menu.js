var Rou = Rou || {};

Rou.Menu = (function($) {

    return {
        init: function() {
            var to;

            $('.c-menu .item.with-submenu')
                .mouseenter(function() {
                    //console.log('mouseover');

                    var $this = $(this);            

                    clearTimeout(to);

                    $this.addClass('is-open');
                    Rou.OverlayBlur.start();
                })
                .mouseleave(function() {            

                    var $this = $(this);

                    to = setTimeout(function() {
                        //console.log('mouseout');

                        $this.removeClass('is-open');

                        Rou.OverlayBlur.stop();
                    }, 500);            
                });
        }        
    };
})(jQuery);