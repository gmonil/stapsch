    //Enable sidebar toggle
    $("[data-toggle='offcanvas']").click(function(e) {
        e.preventDefault();

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


jQuery(document).ready(function($) {
    
});
$(document).ready(function() {
    $('#alertTable').DataTable({
    	bAutoWidth: false , 
	  	aoColumns : [
	    { sWidth: '10%' },
	    { sWidth: '50%' },
	    { sWidth: '20%' },
	    { sWidth: '20%' }
	  ]});
    $('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height()-46);
});