$(function () {

	var tabs = $('.wrapper');
	$('.tabs-content > div', tabs).each(function(i){
		if ( i != 0 ) $(this).hide(0);
	});

	tabs.on('click', '.tabs a', function(e){
		e.preventDefault();

	var tabId = $(this).attr('href');

	$('.tabs a', tabs).removeClass();
	$(this).addClass('active');

	$('.tabs-content > div', tabs).hide(0);
	$(tabId).show();	
   
   });
});

//END FIRST TASK SCRIPT

$(function () {

	var $helpText = $('.helpText');
    var $btn = $('#btn');
    
    $btn.on('click', function(){
        $helpText.fadeIn(500);   
    });
        $('.inlineBlock').hover(function(e){
            var $input = $(e.target);
            $input.siblings($helpText).fadeIn(500);
        },function(e){
            var $input = $(e.target);
            $input.siblings($helpText).fadeOut(500);
        
        });
    
});//END FUNCTION 

