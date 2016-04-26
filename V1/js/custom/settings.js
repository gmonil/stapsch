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
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});

$(window).resize(function () {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});

var app = angular.module("settingsApp",[]);
app.controller("settingsController",function($scope){
	
	$scope.firstName = "";
	$scope.middleName = "";
	$scope.lastName = "";
	$scope.contact1 = "";
	$scope.contact2 = "";
	$scope.email1 = "";
	$scope.email2 = "";

	$scope.showName=false;
	$scope.showPassword = false;
	$scope.showContact = false;
	$scope.showEmails = false;

	$scope.getName = function(){
		return $scope.firstName + " " + $scope.middleName+ " "  + $scope.lastName;
	}
	$scope.getContacts = function(){
		return $scope.contact1 + ", " + $scope.contact2;
	}
	$scope.getEmails = function(){
		return $scope.email1 + ", " + $scope.email2;
	}

	$scope.saveNamesToBackend = function(){
		$scope.showName=false;
	}
	$scope.savePasswordToBackend = function(){
		$scope.showPassword = false;
	}
	$scope.saveContactToBackend = function(){
		$scope.showContact = false;
	}
	$scope.saveEmailToBackend = function(){
		$scope.showEmails = false;
	}
});