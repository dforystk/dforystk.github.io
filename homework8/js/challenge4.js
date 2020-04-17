$(document).ready(function () {
	$('#challenge4_form').submit(function (e){
    	if ($.trim($("#name, #addr").val()) === '') {
    		e.preventDefault();
		}
		
		if ($.trim($('#name').val()) === ''){
			e.preventDefault();
			$('#nameError').show();
		}
		else{
			$('#nameError').hide();
		}

		if ($.trim($('#addr').val()) === ''){
			e.preventDefault();
			$('#addrError').show();
		}
		else{
			$('#addrError').hide();
		}
	});	
});