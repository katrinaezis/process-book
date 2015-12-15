$(document).ready(function() {
	$(".joverlay").hide();
	$(".koverlay").hide();
	$(".noverlay").hide();
	 $(".button-collapse").sideNav();
	 $(".julian").hover(
	 	function() {
	 		$('.joverlay').show();
	 	},
	 	function() {
	 		$('.joverlay').hide();
	 	}
	 )
	 $(".natasha").hover(
	 	function() {
	 		$('.noverlay').show();
	 	}, function() {
	 		$('.noverlay').hide();
	 	}
	 )
	 $(".katrina").hover(
	 	function() {
	 		$('.koverlay').show();
	 	},
	 	function() {
	 		$('.koverlay').hide();
	 	}
	 )
});