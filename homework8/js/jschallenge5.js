$(document).ready(function (){
	$('.thumbnail').hover(function (e) {
		$('#display').css('background-image', "url(" + $(this).attr('src') + ")");
		$('#display').html($(this).attr('alt'));
	$('.thumbnail').mouseleave(function(e){
		$('#display').css('background-image','')
		$('#display').html('Hover over an image below to display the image and the alt text.')
	})


	});
});