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
  } else {
    $('#home').removeAttr('disabled');
  }
}

$('#sameAddress').click(function(){
  setHomeAddress();
})