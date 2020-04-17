$("#subscribe").click(function () {
    if ($(this).is(":checked")) {
        // $("#emailDiv").show();
        $("#emailDiv").fadeIn(1500);
    } else {
        $("#emailDiv").hide();
    }
});