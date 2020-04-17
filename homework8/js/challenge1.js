// subscribe.addEventListener('change', function() {
// 	console.log("here")
// 	var x = document.querySelector("#emailDiv");
// 	if (this.checked){
// 		x.style.display="block";
// 	}
// 	else{
// 		x.style.display = "none";
// 	}
// })

$("#subscribe").click(function () {
    if ($(this).is(":checked")) {
        $("#emailDiv").show();
    } else {
        $("#emailDiv").hide();
    }
});