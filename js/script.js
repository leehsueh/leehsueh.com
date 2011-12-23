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
	        500, 
	        'swing',
	        function() {}
	    );
        return false;
    });

	//set the link
	$('#topLink').topLink({
		min: 100,
		fadeSpeed: 800
	});
})