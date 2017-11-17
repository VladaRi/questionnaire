$(document).ready(function() {
    $(".birthday-year").select2({
	    placeholder: "Год рождения"
	});

	$( "#slider-range-max" ).slider({
	      range: "max",
	      min: 1,
	      max: 101,
	      value: 51,
	    });
	    

   $('.main-header__icon-menu-bars').click(function(){
		$('.main-header').toggleClass('open-block');
	});

});