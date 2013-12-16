$(document).ready(function($) {
    
	$('.tabs').tabulous({});
	
    $('#tabs1').tabulous({
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

});