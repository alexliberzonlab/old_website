/******************************************************************************************************************
	FUNCTIONES PARA VISTA DE PROYECTOS PRINCIPAL
*******************************************************************************************************************/
$(document).ready(function() {	
	$(window).bind('scroll',function(){ 		$.stickyTitle() });
	$('.nav li a').bind('click',function(){		$.scrollToWithHeader(this, '200'); return false;	});
});