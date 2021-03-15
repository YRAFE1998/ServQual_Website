import $ from 'jquery';



$(window).on('scroll',function(){

	if ($(window).scrollTop() >= 100) {
		$('.navbar ').addClass("navigation-background");
	} else {
		$('.navbar').removeClass("navigation-background");
	}
 });

$(document).ready(function(){

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

	$('.nav-item.dropdown').mouseenter(function(event){
		if($(window).width() > 900){
		$(this).find(".dropdown-menu").addClass("show");
		$(this).addClass("show");}
	});
	$('.nav-item.dropdown').mouseleave(function(event){
		if($(window).width() > 900){
		var x=false;
		$(this).find(".dropdown-menu").mouseover(function(event){
			x=true;
		});
		if(!x){
			$(this).find(".dropdown-menu").removeClass("show");
			$(this).removeClass("show");
		}
		}
	});

	$('.toggledropdown').click(function(event) {
		var dropdownitem = $(this).parent().find(".dropdown-menu");
		if(dropdownitem.hasClass("show")){
			 dropdownitem.removeClass("show");
			 $(this).parent().removeClass("show");
		}
		else{
			dropdownitem.addClass("show");
			$(this).parent().addClass("show");
		} 
	})



	$('.navbar-toggler').click(function(event) {
		$('.navbar ').addClass("navigation-background");		
	});

});