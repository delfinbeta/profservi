/*********************************************/
/*****                                   *****/
/*****  Documento CSS                    *****/
/*****                                   *****/
/*****  Fecha: 10/11/2016                *****/
/*****  Autor: Lcda. Dayan Betancourt    *****/
/*****                                   *****/
/*********************************************/

$(document).ready(function() {
	//----------------------------------------------------
	//  Encabezado
	//----------------------------------------------------
	$(window).on('scroll', function() {
		console.log($(window).scrollTop());
		if($(window).scrollTop() > 80) {
			$('.encabezado-inicio').addClass('encabezado-fondo');
		} else {
			$('.encabezado-inicio').removeClass('encabezado-fondo');
		}
	});
	//----------------------------------------------------
});