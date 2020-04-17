sameAddress.onchange = function(){
	console.log("sup")
	let x = document.querySelector('#bill')
	let y = document.querySelector('#home')
	if (this.checked){
		console.log(x.value)
		y.value = x.value
		y.disabled = true
	}
}