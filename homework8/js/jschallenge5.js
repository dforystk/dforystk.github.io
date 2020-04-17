$(document).ready(function (){
	$('.thumbnail').hover(function (e) {
		$('#display').html($(this).attr('alt'));
	});

});