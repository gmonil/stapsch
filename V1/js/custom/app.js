//Enable sidebar toggle
$("[data-toggle='offcanvas']").click(function (e) {
	e.preventDefault();
	$('body').toggleClass("collp");
	//If window is small enough, enable sidebar push menu
	if ($(window).width() <= 992) {
		$('.row-offcanvas').toggleClass('active');
		$('.left-side').removeClass("collapse-left");
		$(".right-side").removeClass("strech");
		$('.row-offcanvas').toggleClass("relative");
	} else {
		//Else, enable content streching
		$('.left-side').toggleClass("collapse-left");
		$(".right-side").toggleClass("strech");
		$(".right-side").toggleClass("left-trans");
	}
});

jQuery(document).ready(function ($) {
	$('[data-submenu]').submenupicker();
});

$(window).bind("load", function() { 
       
	var footerHeight = 0,
	   footerTop = 0,
	   $footer = $(".footer-main");
	   
	positionFooter();

	function positionFooter() {

	        footerHeight = $footer.height();
	        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight) - 15 +"px";

	       if ( ($(document.body).height()+footerHeight) < $(window).height()) {
	           $footer.css({
	                position: "absolute",
	                //top: footerTop
	                bottom:"0px"
	           })
	       } else {
	           $footer.css({
	                position: "relative"
	           })
	       }
	       
	}

	$(window)
	       .scroll(positionFooter)
	       .resize(positionFooter)            
});