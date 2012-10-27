$(document).ready(function () {
	var DEBUG_POR_PRO = true;
	/*******************************************************************************************************************
		FUNCIONES PARA VISTA DE PROYECTOS DETALLE (imagenes, descripción, reacciones)
	
	*******************************************************************************************************************/
	var imagesDelay = 3000; // 2 seconds for slideshow in VISTA imagenes
	var slideShowProyectosInterval;  // variable for clearing interval
	var n_images    = $('.imagenesProyecto').find('div.imagenFullScreen').length; // number of images in VISTA imagenes PROYECTOS
	var slideShowProyectos = function() {
		var el, el_id; 			 // Activo Imagen
		var next_el, next_el_id; // Next Activo Imagen
	    el = $('.imagenesProyecto').find('div.imagenFullScreen.activo'); // Current Image
		el_id = (el).attr('id').split('imagen').pop(); // me da el número de imagen
		if( el_id < n_images){
			next_el_id = Number(el_id) + Number(1);
		}else{
			next_el_id = Number(1);
		}
		next_el= $('.imagenesProyecto').children('div[id=imagen'+next_el_id+']'); // Next Image
	    (next_el).addClass("activo");	
		// Show Next Image and caption
		$('.selectorImagenes li a[href=#'+next_el_id+']').parent().addClass('activo');
		$('.captionImagenes div[id=caption'+next_el_id+']').addClass('activo');
		(el).removeClass("activo");
		// Hide Current Image and caption
		$('.selectorImagenes li a[href=#'+el_id+']').parent().removeClass('activo');
		$('.captionImagenes div[id=caption'+el_id+']').removeClass('activo');
	};
	/* La variable "botonInicial" se actualiza con la vista inicial */
	$(botonInicial).find('a').trigger('click'); 	// hacer click
	$(botonInicial).find('a').addClass('activo'); 	// seleccionar
	if (botonInicial == '#imagenes'){
		slideShowProyectosInterval= setInterval(slideShowProyectos,imagesDelay);
	}
	/* 
	Seleccionar imagen de fondo asociada a la vista IMAGENES.
	*/
	$('.selectorImagenes li').live('click',function(){
		$('.selectorImagenes li').removeClass('activo');
		$(this).addClass('activo');
		$('.captionImagenes div').removeClass('activo');
		var id = $(this).find('a').attr('href').split('#').pop();
	    var currentCaption = "#caption"+ id; 
		$('.captionImagenes div').filter(currentCaption).addClass('activo');
		var currentImage = "#imagen"+id;
		$('.imagenesProyecto .imagenFullScreen').removeClass('activo');
		$(currentImage).addClass('activo');
		return false;
	});
	/*
	Mostrar vista IMAGENES, DESCRIPCION o REACCIONES.
		1- Al hacer click en el botón imágenes, descripción o reacciones añadir  
			style="display:none" a aquella información que debe permanecer oculta.
		2- Cambiar estilo de botón al hacer click en él:
			class="activo"
		3- Posicionar el scroll al principio para que se quite el sticky título superior 
		si es que había.
	*/
	$('.switcher.ewf a').live('click',function(){
		var idRemove = $('.switcher.ewf a.activo').attr('href').split('#').pop();
		$('body').removeClass(idRemove); 
		$('.switcher.ewf a.activo').removeClass('activo'); // Eliminar activo de actual 
		$(window).scrollTop(0);
		$('.indexTitle').children().remove(); // delete title from top div indextitle.
		//
		$(this).addClass('activo');
	    var idAdd = $(this).attr('href').split('#').pop();
		$('body').addClass(idAdd); // Cambio la clase del Body
		if (idAdd == 'imagenes'){
			clearInterval(slideShowProyectosInterval);
			slideShowProyectosInterval= setInterval(slideShowProyectos,imagesDelay);
		}else{
			clearInterval(slideShowProyectosInterval);
		}
		return false;
	});
	/*
		Stop SlideShow in VISTA imágenes when cursor over infoImagenes Proyecto 
	*/
	$('.infoImagenesProyecto').hover(
		  function () { // Mouse pointer enters the element.
			clearInterval(slideShowProyectosInterval);
			$('.selectorImagenes li.activo').addClass("blinking");
		  },
		  function () { // Mouse pointer leaves the element.
			slideShowProyectosInterval= setInterval(slideShowProyectos,imagesDelay);
			$('.selectorImagenes li').removeClass("blinking");
		  }
	);
	/*
		Mostrar/Ocultar resumen proyecto cuando en Tag Imágenes y hover mouse.
	*/
	$('.resumenProyecto').hover(
		function () { // Mouse pointer enters the element.
			if ($('body').hasClass('imagenes')){
				$('.resumenProyecto').removeClass("fade");
			}
		},
		function () { // Mouse pointer leaves the element.
			if ($('body').hasClass('imagenes')){
				$('.resumenProyecto').addClass("fade");
			}
		}
	);
	/*
		PUT section DescripcionProyecto INTO div indexTitle 
		We cannot used stickyTitle method since there is no navigation Bar, it is only H2 titles moving when scrolling.
		We detect when those titles reach the beginning of the page for moving then into the top DIV indexTextile.
	*/
	var tempScrollTop, currentScrollTop = 0; // for getting the scroll direction
	$(window).bind('scroll', function(){ // check only for vertical scroll
		var sectionName;
		var titleType;
		if ($('body').hasClass('descripcion') == true){
			sectionName = '.descripcionProyecto';
		}else{
			if ($('body').hasClass('reacciones') == true){
				sectionName = '.reaccionesProyecto';
			}
		}
		currentScrollTop = $(window).scrollTop(); 
		if (tempScrollTop > currentScrollTop && sectionName != '') {
		      // Upscroll code
		     		$(sectionName).find('h2').each(function(index, item) {
					if( DEBUG_POR_PRO) { console.log("Upscroll code "+index);}
					var indexTop = $('.indexTitle').css('top').replace('px','');
					var indexHeight = $('.indexTitle').css('height').replace('px','');
					var previousChild, limitPrevious;
					var limitCurrent = Number($(this).position().top) - Number($(this).css('height').replace('px','')) - Number(indexTop) - Number(indexHeight);
					if ( index == 0 ){
						 $('.indexTitle').children().remove();
						 if (limitCurrent < $(window).scrollTop()){
							$(this).clone().appendTo($('.indexTitle')); // add next
							if( DEBUG_POR_PRO) { console.log("Add Title upscroll");}
							}
					}else{
						var arrayH2 = $(sectionName).find('h2'); 
						previousChild = $(arrayH2)[ Number(index)-Number(1)];
						if( DEBUG_POR_PRO) { console.log($(previousChild).position().top );}
						limitPrevious = Number($(previousChild).position().top) - Number(indexTop) - Number(indexHeight);
						if (limitPrevious < $(window).scrollTop() && limitCurrent < $(window).scrollTop()){
							$('.indexTitle').children().remove(); // only one H2 at a time in indexTitle.
							$(this).clone().appendTo($('.indexTitle')); // add next
							if( DEBUG_POR_PRO) { console.log("Add Title downscroll");}
						}
					}
					
				});
		}else if (tempScrollTop < currentScrollTop && sectionName != ''){
		      // Downscroll code
		      if( DEBUG_POR_PRO) { console.log("Downscroll code ");}
		      $(sectionName).find('h2').each(function(index, item) {
					var indexTop = $('.indexTitle').css('top').replace('px',''); // Remove 'px'
					var indexHeight = $('.indexTitle').css('height').replace('px',''); // Remove 'px'
					var limit = Number($(this).position().top) + Number($(this).css('height').replace('px',''))/2 - Number(indexTop) - Number(indexHeight);
					if (limit < $(window).scrollTop() ){
						$('.indexTitle').children().remove(); // only one H2 at a time in indexTitle.
						$(this).clone().appendTo($('.indexTitle'));
					}
				});
		      
		}
		tempScrollTop = currentScrollTop; 
	});
	// Depending on direction of scroll we need to Add or Remove Title. Think about it.
		
});











