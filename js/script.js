/* Author:

*/
//plugin
jQuery.fn.topLink = function(settings) {
  settings = jQuery.extend({
    min: 1,
    fadeSpeed: 200
  }, settings);
  return this.each(function() {
    //listen for scroll
    var el = $(this);
    el.hide(); //in case the user forgot
    $(window).scroll(function() {
      if($(window).scrollTop() >= settings.min)
      {
        el.fadeIn(settings.fadeSpeed);
      }
      else
      {
        el.fadeOut(settings.fadeSpeed);
      }
    });
  });
};

$(document).ready(function() {
	$("#side-nav li a").click(function() {
        var elementClicked = $(this).attr("href");
        var destination = $(elementClicked).offset().top;
        $("html:not(:animated),body:not(:animated)").animate(
	        {scrollTop: destination-50}, 
	        800, 
	        'easeOutQuart',
	        function() {}
	    );
        return false;
    });

	//set the link
	$('#topLink').topLink({
		min: 100,
		fadeSpeed: 800
	});
    
    $('#cards').hide();
    $('#cards').delay(800).slideDown(300);

    $('#side-nav').hide();
    $('body').delay(800).animate({
      marginLeft:'250px'
    }, 1000, 'easeOutQuart',function() {$('#side-nav').fadeIn(200);});
    
})