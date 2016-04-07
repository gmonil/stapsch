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


$(window).resize(function () {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});

$(document).ready(function () {
	$('[data-submenu]').submenupicker();
	$('#alertTable').DataTable({
		bAutoWidth: false,
		aoColumns: [
			{
				sWidth: '7%'
			},
			{
				sWidth: '65%'
			},
			{
				sWidth: '10%'
			},
			{
				sWidth: '10%'
			}, {
				"mData": null,
				sWidth: '5%',
				"bSortable": false,
				"mRender": function (data, type, full) {
					return '<a href="#" onclick="func(\'' + full[0] + '\'' + ',' + '\'' + full[1] + '\')"><i class="fa fa-pencil-square-o"></i>&nbsp;Edit</a>';
				}
	  }]
	});
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);

});

function func(std, desc) {
	$('#myAlertModal').modal('show');
	$("#modal_alert_desc").val(desc);
}
