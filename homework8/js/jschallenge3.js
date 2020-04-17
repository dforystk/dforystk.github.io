$(document).ready(function () {
	$('#ch3form').submit(function (e){
		if (!$('input[type="radio"]').is(':checked')){
			e.preventDefault();
			alert('PLEASE SELECT ONE CHOICE FROM EACH SECTION');
		}

		else if (!$('input[name="standing"]').is(':checked')){
			e.preventDefault();
			alert('PLEASE SELECT A CLASS STANDING');
		}

		else if (!$('input[name="gradDate"]').is(':checked')){
			e.preventDefault();
			alert('PLEASE SELECT A DATE');
		}
	});
});

