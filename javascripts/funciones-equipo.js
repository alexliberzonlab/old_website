/******************************************************************************************************************
	FUNCIONES DE LA VISTA DE EQUIPO GENERAL

*******************************************************************************************************************/
	$(document).ready(function() {	
		$(window).bind('scroll',function(){ $.stickyTitle() });
		$('.nav li a').bind('click',function(){		$.scrollToWithHeader(this, '140'); return false;	});
		
	});	