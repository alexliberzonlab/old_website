var fadeStart=0 ,fadeUntil=80 ,fading = $('#fading');
$(window).bind('scroll', function() {
	var offset = $(document).scrollTop(), opacity=0;
	if ( offset<=fadeStart ){
		opacity=0;
	} else if ( offset<=fadeUntil ){
		opacity=0+offset/fadeUntil;
	} else if (offset>fadeUntil) {
		opacity=0.7;
	}
	fading.css('opacity',opacity);
});