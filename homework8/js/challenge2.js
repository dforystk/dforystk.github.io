// sameAddress.onchange = function(){
// 	console.log("hi")
// 	let x = document.querySelector('#bill')
// 	let y = document.querySelector('#home')
// 	if (this.checked){
// 		console.log(x.value)
// 		y.value = x.value
// 		y.disabled = true
// 	}
// }

function setHomeAddress(){
  if ($("#sameAddress").is(":checked")) {
    $('#home').val($('#bill').val());
    $('#home').attr('disabled', 'disabled');
    $('#home').css('background-color', '#d1d1d1')
  } else {
    $('#home').removeAttr('disabled');
    $('#home').css('background-color','#FFFFFF')
    $('#home').val('');
  }
}

$('#sameAddress').click(function(){
  setHomeAddress();
})