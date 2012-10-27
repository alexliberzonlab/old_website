jQuery(document).ready(function () {
	/******************************************************************************************************************
		Functions for HOME
	
	*******************************************************************************************************************/
	var homeDelay = 8000;
	var slideShowHomeInterval;  // variable for clearing interval
	var n_home = $('.contenedorPoster').find('div.posterProyecto').length;  // number of images in VISTA HOME
	// tomar color fondo del proyecto activo y asignar color
	var currentColorFondo = $('.contenedorPoster').find('div.posterProyecto.activo').attr('colorFondo');
	$('.contenedorPoster').attr('style','background-color:'+currentColorFondo);
	$('.piePagina').attr('style','background-color:'+currentColorFondo);
	// Implementar un ciclo automatico que cambia la clase .activo del div .posterProyecto y del div .selectorProyectos>li . 
	// La diferencia con respecto a la implementacion en vista proyecto es que también hay que cambiar la clase .light o .dark que afecta al body, 
	// este valor se toma del cada div .posterProyecto que tienen u atributo llamado template.
	// Pause cuando el puntero esta encima del div.selectorProyectos. Play cuando salgamos del div.selectorProyectos
	var slideShowHome = function() {
		var el, el_id; 			 // Activo Proyecto
		var next_el, next_el_id; // Next Activo Proyecto
	    el = $('.contenedorPoster').find('div.posterProyecto.activo'); // Current Image
		el_id = (el).attr('id').split('proyecto').pop(); // me da el número de imagen
		if( el_id < n_home){
			next_el_id = Number(el_id) + Number(1);
		}else{
			next_el_id = Number(1);
		}
		next_el= $('.contenedorPoster').children('div[id=proyecto'+next_el_id+']'); // Next Image
	    (next_el).addClass("activo");	
		// #016 Ticket
		var currentColorFondo = (next_el).attr('colorFondo');
		$('.contenedorPoster').attr('style','background-color:'+currentColorFondo);
		$('.piePagina').attr('style','background-color:'+currentColorFondo);
		
		$('.selectorProyectos ul li a[href=#'+next_el_id+']').parent().addClass('activo');
		(el).removeClass("activo");
		$('.selectorProyectos ul li a[href=#'+el_id+']').parent().removeClass('activo');
		$('body').attr('class',next_el.attr('template'));
		
	};
	slideShowHomeInterval = setInterval(slideShowHome,homeDelay);
	/*
		Stop SlideShow in HOME when cursor over selectorProyectos 
	*/
	$('.selectorProyectos').hover(
		  function () { // Mouse pointer enters the element.
			clearInterval(slideShowHomeInterval);
		  },
		  function () { // Mouse pointer leaves the element.
			slideShowHomeInterval= setInterval(slideShowHome,homeDelay);
		  }
	);
	/* 
	Seleccionar imagen de fondo asociada a la vista IMAGENES.
	*/
	$('.selectorProyectos ul li').live('click',function(){
		// Selector button
		$('.selectorProyectos ul li').removeClass('activo');
		$(this).addClass('activo');
		var id = $(this).find('a').attr('href').split('#').pop();
		// #016 Ticket
		var currentColorFondo = $('.contenedorPoster').children('div[id=proyecto'+id+']').attr('colorFondo');
		$('.contenedorPoster').attr('style','background-color:'+currentColorFondo);
		$('.piePagina').attr('style','background-color:'+currentColorFondo);
		// Project
		$('.contenedorPoster div').removeClass('activo');
		$('.contenedorPoster').children('div[id=proyecto'+id+']').addClass('activo');
		$('body').attr('class',$('.contenedorPoster').children('div[id=proyecto'+id+']').attr('template'));
		
		return false;
	});
});