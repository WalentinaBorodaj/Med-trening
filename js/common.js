$(document).ready(function() {
	if($(window).width()>767) {
		$(".animation_1").animated("flipInY", "flipOutY");
		$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
		$(".animation_3").animated("fadeInRight", "fadeOutRight");
		$(".animation_up").animated("fadeInUp", "fadeOutDown");
		$(".animation_down").animated("fadeInDown", "fadeOutUp");
	}
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});