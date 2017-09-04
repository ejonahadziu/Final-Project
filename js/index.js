$(document).ready(function() {
	
	$('#menu').on({
		mouseenter: function () {
			$('.menuoptions').show();
		},
		mouseleave: function () {
			$('.menuoptions').hide();
		}
	});

	$('#about').on({
		mouseenter: function () {
			$('.abouttext').show();
		},
		mouseleave: function () {
			$('.abouttext').hide();
		}
	});


});