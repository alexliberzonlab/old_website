/******************************************************************************************************************
// This is my own set of jQuery Plugin
// Methods:
// 	- stickyTitle:
//	- scrollToWithHeader:
*******************************************************************************************************************/
/*	Name: stickyTitle
	When scrolling the elements in nav bar get selected as going thorugh the different sections of the page.
	The HREF attribute of the nav bar is equal to the ID of the title where to go down or up the page.
	Input Data:
			arrayH2: $('.contenedor').find('section'), // Lista de Títulos que se van desplazando hacia arriba al hacer scroll
			navigationVar: $('.subnav'),			// Barra de Navegación Fija Superior
			navigationVarElements: $('.nav li a'),	// Lista de Elementos de la Barra de Navegación Fija Superior
			offsetBefore: -0,
			limitScroll: 0,							// Valor del scroll para el cual se añade .fixed
			subnavTop: $('.subnav').position().top,
			subnavHeight: $('.subnav').css('height').replace('px','')
	Sample:
		$(window).bind('scroll',function(){ 
								$.stickyTitle() 
		});
	Author: Magda Sanchez for Colaborativa
*/
(function($){
var DEBUG = false;
var defaultOptions = {
	arrayH2: $('.contenedor').find('section'), // Lista de Títulos que se van desplazando hacia arriba al hacer scroll
	navigationVar: $('.subnav'),// Barra de Navegación Fija Superior
	navigationVarElements: $('.nav li a'),// Lista de Elementos de la Barra de Navegación Fija Superior
	offsetBefore: -0,
	limitScroll: 0,	// Valor del scroll para el cual se añade .fixed
	subnavTop: $('.subnav').position().top,
	subnavHeight: $('.subnav').css('height').replace('px','')
};
$.stickyTitle = function(options){	
	//
	options = $.extend({}, defaultOptions, options || {});
	//
	if( typeof currentScrollTop == 'undefined' ) {        currentScrollTop = 0; }	// static variable
	if( typeof tempScrollTop == 'undefined' ) 	 {        tempScrollTop = 0; }		// static variable
	// 
	currentScrollTop = $(window).scrollTop();
	if( DEBUG) console.log(currentScrollTop +" " + tempScrollTop+ " " +options.limitScroll+" Top"+options.subnavTop + " Height"+options.subnavHeight+$(options.arrayH2));
	if (tempScrollTop > currentScrollTop ) {// Upscroll code
	     // 1st Remove .fixed to Subnav div class 
	     if(currentScrollTop < options.limitScroll && ($(options.navigationVar).hasClass('fixed'))){
			$(options.navigationVar).removeClass('fixed');
		 }
		// 2nd Remove .Active to A tag
		$(options.arrayH2).each(function(index, item) {
	 		var limitCurrent = Number($(this).position().top) - Number(options.subnavTop) - Number(options.subnavHeight);
			var h2_id = $(this).attr('id');
			if ( index == 0  ){
				// nothing
				if ( (Number(limitCurrent)+Number(options.offsetBefore) ) < 0){
					$(options.navigationVarElements).removeClass('activo');
					$(options.navigationVarElements+'[href=#'+h2_id+']').addClass('activo');
				}
			}else{
				var previousChild = $(options.arrayH2)[Number(index)-Number(1)];
				var limitPrevious = Number($(previousChild).position().top) - Number(options.subnavTop) - Number(options.subnavHeight);
				if( DEBUG){ console.log("Upcroll	limitCurrent:" + limitCurrent + "	limitPrevious:"+ limitPrevious+"	" + "	h2_id:" + h2_id);}
				if( DEBUG){ console.log("Upcroll	" + Number($(this).position().top));};
				if ((Number(limitPrevious)+Number(options.offsetBefore) ) < currentScrollTop && (Number(limitCurrent)+Number(options.offsetBefore) ) < currentScrollTop){
				
					$(options.navigationVarElements).removeClass('activo');
					$(options.navigationVarElements+'[href=#'+h2_id+']').addClass('activo');
				}
			}
		});
	}else if (tempScrollTop < currentScrollTop ){ // Downscroll code
	     // 1st Add .fixed to Subnav div class 
	     if(currentScrollTop >= options.limitScroll && !($(options.navigationVar).hasClass('fixed'))){
			$(options.navigationVar).addClass('fixed');
		 }  
		// 2nd Add .Active to A tag
		 $(options.arrayH2).each(function(index, item) {
			var limit = Number($(this).position().top)  - Number(options.subnavTop) - Number(options.subnavHeight);
			var h2_id = $(this).attr('id');
			if( DEBUG){ console.log("downscroll	" + "limit	" + limit+"	" + "	h2_id:" + h2_id + "top" + Number($(this).position().top));}
				if( (Number(limit) + Number(options.offsetBefore) ) < currentScrollTop){
				$(options.navigationVarElements).removeClass('activo');
				$(options.navigationVarElements+'[href=#'+h2_id+']').addClass('activo');
			}
		});
	}
	tempScrollTop = currentScrollTop; 
	return this;  // in order to chain functions together
}
/*	Name: scrollToWithHeader
	This functions is used for moving into the same page by clicking on the different titles
	normally located on a TOP navigation bar and scroll down to the appropriate part of the page.
	The HREF attribute of the nav bar is equal to the ID of the title where to go down or up the page.
	Input Data:
		- target:It refers to the title on the navigation bar that will be hightlighted. Its HREF
		attribute will be used for selecting the title with ID=HREFCONTENT and to scroll to it.
		- height: this is the relative Top position where we want to position the title.
	Sample:
		$('.nav li a').bind('click',function(){		
									$.scrollToWithHeader(this, '140'); 
									return false;	
		});
	Author: Magda Sanchez for Colaborativa
*/
$.scrollToWithHeader = function(target, height){
	var id = $(target).attr('href');
	var scrollY = Number($(id).position().top) - Number(height);
	window.scrollTo(0,scrollY);
	return this;  // in order to chain functions together
}
})(jQuery);
