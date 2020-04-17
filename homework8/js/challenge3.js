// ch3form.addEventListener('submit', function(e){
// 	var grade = 
// 	document.querySelectorAll('input[name="standing"]:checked')
// 	var year = document.querySelectorAll('imput[name="gradDate"]:checked')

// 	if (grade.length == 0 || year.length == 0){
// 		console.log('0');

// 		if (grade.length == 0 && year.length == 0){
// 			alert('select one');
// 		}
// 		else if (grade.length == 0){
// 			alert('class standing');
// 		} 
// 		else {
// 			alert('graduation date');
// 		}
// 		e.preventDefault()
// 	}
// }




$(document).ready(function () {
	$('input[type="submit"]').attr('disabled', true);
	alert('Please select one from each section');
	$('#ch3form').change(function (e) {
		if ($('input[name="standing"]:checked').length > 1 || $('input[name="gradDate"]:checked').length > 1){
			alert("Please pick one from each section");
		}
		if ($('input[name="standing"]:checked').length  == 1 && $('input[name="gradDate"]:checked').length == 1){
			$('input[type="submit"]').removeAttr('disabled');
	}
	e.preventDefault();
	});
	
});






// $(document).ready(function () {
// 	$("input.submit").click(function(e){
// 		e.preventDefault();
// 		if ($('input[type="radio"]').is(':checked').length == 0){
// 			alert("Please select one only from each section");
// 		}
// 	});
// 	$('input[type="radio"]').click(function(e){

// 	});




