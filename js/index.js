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

	var quotes = [ 
		"With enough coffee anything is possible",
		"A coffee a day keeps the grumpy way",
		"I only drink coffee on days ending in 'Y' ",
	];

	var i = 0;

	function previousQuote() {
		i--;
		if (i === -1) {
			i = quotes.length - 1;
		}
		changeQuote();
	}

	function nextQuote(){
		i++;
		if (i === quotes.length) {
			i = 0;
		}
		changeQuote();
}

	function changeQuote(){
		$("#quote").text(quotes[i]); 
	}

	$("#next").on("click", nextQuote);
	$("#prev").on("click", previousQuote);
	
	$('.quote').carousel({
  		interval: 2000
	})

	$("#location").click(function() { 

    	$("#googleMap").show(); 

    });



});