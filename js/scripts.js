
$("#aboutusbuttonheader").click(function(event) {
	var y=$("#aboutus").offset().top -100;
	console.log(y);
	$("html,body").animate({scrollTop: y}, 2000);
});

$("#getaquotebuttonheader").click(function(event) {
	var y=$("#HireUs").offset().top -80;
	console.log(y);
	$("html,body").animate({scrollTop: y}, 2000);
});
