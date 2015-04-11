$(document).ready(function($) {
    

    $('#tabs').tabulous({
    	effect: 'scale'
    });

     $('#tabs2').tabulous({
    	effect: 'slideLeft'
    });

     $('#tabs3').tabulous({
    	effect: 'scaleUp'
    });

    $('#tabs4').tabulous({
    	effect: 'flip'
    });

    $('#tabs5').tabulous({
        effect: 'flip',
        tabs: $("#tabs5-switcher > li > a")
    });
});