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


$(window).resize(function(){
    $('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height()-46);
});

$(document).ready(function() {
    $('#alertTable').DataTable({
    	bAutoWidth: false , 
	  	aoColumns : [
	    { sWidth: '10%' },
	    { sWidth: '50%' },
	    { sWidth: '15%' },
	    { sWidth: '15%' }, {
	      "mData": null,
	      "bSortable": false,
	      "mRender": function(data, type, full) {
	        return '<button type="button" class="btn btn-success btn-sm" onclick="func(\''+ full[0] + '\')"><i class="fa fa-pencil-square-o"></i>&nbsp; edit</a>';
	      }
	  }]});
    $('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height()-46);
});

function func(data){
	alert(data);
}