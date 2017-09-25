var Rou = Rou || {};

Rou.ProductConfig = (function($) {

    return {
        init: function() {

            /* Product parts */
            Rou.ProductConfig.setupParts();
            $(window).resize(Rou.ProductConfig.onResize);
            $('.c-config-parts').find('> .item > a').on('click', Rou.ProductConfig.selectPart);

            /* Layout (grid) selector */
            $('.c-icons-group').find('a').on('click', Rou.ProductConfig.changeLayout);

            /* Accordions */
            $('.c-accordion').find('.accordion-title > a').on('click', Rou.ProductConfig.toggleAccordions);
        },

        onResize: function() {
            Rou.ProductConfig.adjustSpacing(); 
            clearTimeout(window.resizedDone);

            window.resizedDone = setTimeout(function() {
                Rou.ProductConfig.adjustSpacing();
            }, 500);
        },

        setupParts: function() {
            var heightArray = $('.c-config-parts > .item').map(function() {
                return $(this).height();
            }).get();
            
            var maxHeight = Math.max.apply(Math, heightArray);
            $('.c-config-parts > .item > a').height(maxHeight - 16);
        },

        selectPart: function(e, part) {
            e.preventDefault();
            var options = $(this).parent('.item').find('.c-config-options');

            $('.c-config-options').hide();
            $('.c-config-parts').find('.item').css('marginBottom', 0);

            // Highlight the selected part
            $('.c-config-parts').find('.item').removeClass('is-selected');
            $(this).parent().addClass('is-selected');

            // If options are available for this part, show them.
            if(options.length) {
                Rou.ProductConfig.adjustSpacing();
                options.show();
            }
        },

        changeLayout: function(e) {
            e.preventDefault();
            $(this).parents('.panel').find('.options')
                .attr('class', 'options')
                .addClass( $(this).attr('data-layout') );
            Rou.ProductConfig.adjustSpacing();
        },

        toggleAccordions: function(e) {
            e.preventDefault();
            var parent = $(this).parents('.c-accordion');
            var content = parent.find('.accordion-content');
            
            // Is the accordion is already expanded, close it.
            if(parent.hasClass('is-expanded')) {
                content.stop(true, true).slideUp(250, function() {
                    parent.removeClass('is-expanded'); 
                    Rou.ProductConfig.adjustSpacing();   
                });
            }

            // If the accordion is closed, first collapse all other accordions before opening this one.
            else {
                $(this).closest('.panel-content').children('.c-accordion').find('.accordion-content')
                    .stop(true, true)
                    .slideUp(250, function() {
                        $(this).closest('.panel-content').children('.c-accordion').removeClass('is-expanded');
                });
                content.stop(true, true).slideDown(250, function() {
                    parent.addClass('is-expanded');
                    Rou.ProductConfig.adjustSpacing();
                });
            }
        },

        adjustSpacing: function() {
            var selectedPart = $('.c-config-parts').find('.item.is-selected');
            var options = selectedPart.find('.c-config-options');
            var panelHeight = options.outerHeight();
            selectedPart.css('marginBottom', panelHeight + 'px');
        }
    };

})(jQuery);