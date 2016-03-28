//Enable sidebar toggle
$("[data-toggle='offcanvas']").click(function (e) {
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

$(function () {
	$(function () {

		$('#modal_alert_subject').daterangepicker({
			autoUpdateInput: false,
			locale: {
				cancelLabel: 'Clear',
				format: 'DD/MM/YYYY'
			}
		});

		$('#modal_alert_subject').on('apply.daterangepicker', function (ev, picker) {
			$(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
		});

		$('#modal_alert_subject').on('cancel.daterangepicker', function (ev, picker) {
			$(this).val('');
		});

		$('#modal_notice_subject').daterangepicker({
			autoUpdateInput: false,
			locale: {
				cancelLabel: 'Clear',
				format: 'DD/MM/YYYY'
			}
		});
		$('#modal_notice_subject').on('apply.daterangepicker', function (ev, picker) {
			$(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
		});

		$('#modal_notice_subject').on('cancel.daterangepicker', function (ev, picker) {
			$(this).val('');
		});
	});
});

jQuery(document).ready(function ($) {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});

$(window).resize(function () {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});
