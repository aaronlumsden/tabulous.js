/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 *
 * Modifications:
 *
 * 2015.04.11 (by AntonAL)
 * Added new option 'tabs', that specifies jquery-elements, acting as tabs switchers. This is useful for tabs, located in random places of the document.
 * Slightly improved implementation, that is now w3c-standards compilant.
 */
(function ( $, window, document, undefined ) {

    var pluginName = "tabulous",
        defaults = {
            effect: 'scale',
            tabs: undefined
        };

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var elem = this.$elem;

            var allLinks = (this.options.tabs) ? this.options.tabs : elem.find("a");

            var allDivs = allLinks.map(function(){
                return $($(this).attr("href"))[0];
            });
            allDivs.css({'position': 'absolute', 'top':'20px'});

            var firstchild = elem.find('li:first-child').find('a');
            var lastchild = elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            var tabsContainer = elem.find('.tabs_container');
            tabsContainer.css('height', tabsContainer.find('div:first').height()+'px');
            firstchild.addClass('tabulous_active');

            if (this.options.effect == 'scale') {
             tab_content = elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
            } else if (this.options.effect == 'slideLeft') {
                 tab_content = elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                 tab_content = elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                 tab_content = elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            allLinks.bind('click', {myOptions: this.options}, function(e) {
                e.preventDefault();

                var currentLink = $(this);

                tabsContainer.addClass('transition');

                allLinks.removeClass('tabulous_active');
                currentLink.addClass('tabulous_active');

                var currentDiv = $(currentLink.attr('href'));

                allDivs.addClass('make_transist');
                currentDiv.addClass('make_transist');

                var effect = e.data.myOptions.effect;
                if (effect == 'scale') {
                    allDivs.removeClass('showscale').addClass('hidescale');
                    currentDiv.addClass('showscale');
                } else if (effect == 'slideLeft') {
                    allDivs.removeClass('showleft').addClass('hideleft');
                    currentDiv.addClass('showleft');
                } else if (effect == 'scaleUp') {
                    allDivs.removeClass('showscaleup').addClass('hidescaleup');
                    currentDiv.addClass('showscaleup');
                } else if (effect == 'flip') {
                    allDivs.removeClass('showflip').addClass('hideflip');
                    currentDiv.addClass('showflip');
                }

                tabsContainer.css('height', currentDiv.height()+'px');
            });
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            new Plugin( this, options );
        });
    };

})( jQuery, window, document );
