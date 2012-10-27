	/******************************************************************************************************************
		FUNCIONES DE LA VISTA DE ARTÍCULOS PRINCIPAL
	*******************************************************************************************************************/
	$(document).ready(function() {	
		$(window).bind('scroll',function(){ $.stickyTitle() });
		$('.nav li a').bind('click',function(){		$.scrollToWithHeader(this, '115'); return false;	});
	});