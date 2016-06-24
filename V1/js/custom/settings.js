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
/*jQuery(document).ready(function ($) {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});

$(window).resize(function () {
	$('aside[class="left-side sidebar-offcanvas left-trans"]').height($("body").height() - 46);
});*/
var app = angular.module("settingsApp",[]);
app.controller("settingsController",function($scope){
	
	$scope.salutationAll = "Ms.";
	$scope.firstName = "Sangeeta";
	$scope.middleName = "S";
	$scope.lastName = "Patil";
	$scope.password = "password";
	$scope.contact1 = "1234567890";
	$scope.contact2 = "0123456987";
	$scope.email1 = "sangeeta@gmail.com";
	$scope.email2 = "spatil@gmail.com";
	$scope.line1 = "B/10, Shree Mansion,";
	$scope.line2 = "Shiv Mandir Road,";
	$scope.line3 = "Ram Nagar,";
	$scope.line4 = "Next to school";
	$scope.city = "Dombivli";
	$scope.state = "Maharashtra";
	$scope.country = "India";
	$scope.zip = "421201";
	$scope.occupation = "Job";

	//Student information
	$scope.salutationStudentAll = "Ms.";
	$scope.firstNameStudent = "Sangeeta";
	$scope.middleNameStudent = "S";
	$scope.lastNameStudent = "Patil";
	$scope.class = "IX-A";
	$scope.studentSkills = "Dancing, Singing, Chess, Carrom";
	$scope.studentAcedemics = "Olympiad, Scholarship, Star gazing, Astronomy";

	$scope.showName=false;
	$scope.showPassword = false;
	$scope.showContact = false;
	$scope.showEmails = false;
	$scope.showAddress = false;
	$scope.showOccupation = false;

	//Student information
	$scope.showStudentName = false;
	$scope.showStudentSkills = false;
	$scope.showStudentAcedemics = false;

	$scope.getName = function(){
		return $scope.salutationAll + " " + $scope.firstName + " " + $scope.middleName+ " "  + $scope.lastName;
	}
	$scope.getStudentName = function(){
		return $scope.salutationStudentAll + " " + $scope.firstNameStudent + " " + $scope.middleNameStudent+ " "  + $scope.lastNameStudent;
	}
	$scope.getContacts = function(){
		return $scope.contact1 + ", " + $scope.contact2;
	}
	$scope.getEmails = function(){
		return $scope.email1 + ", " + $scope.email2;
	}
	$scope.getAddress = function(){
		return $scope.line1 + $scope.line2 + $scope.line3 + $scope.line4 +  ", " + $scope.city + ", " + $scope.state + ", " + $scope.country + ", " + $scope.zip;
	}

	$scope.saveNamesToBackend = function(){
		$scope.showName=false;
	}
	$scope.passwordEditClick = function(){
		
	}
	$scope.savePasswordToBackend = function(){
		if($scope.newpassword == $scope.confirmnewpassword){
			$scope.password = $scope.currentpassword;
			$scope.showPassword = false;
		} else{
			alert("New Password and confirm password are not same. Please enter proper password");
		}
	}
	$scope.saveContactToBackend = function(){
		$scope.showContact = false;
	}
	$scope.saveEmailToBackend = function(){
		$scope.showEmails = false;
	}
	$scope.saveAddressToBackend = function(){
		$scope.showAddress = false;
	}
	$scope.saveOccupationToBackend = function(){
		$scope.showOccupation = false;
	}
	$scope.saveStudentNamesToBackend  = function(){
		$scope.showStudentName = false;
	}
	$scope.saveStudentSkillsToBackend  = function(){
		$scope.showStudentSkills = false;
	}
	$scope.saveStudentAcademicsToBackend  = function(){
		$scope.showStudentAcedemics = false;
	}
	$scope.positionFooter = function() {

		setTimeout(function() {
			var footerHeight = 0,
		   	footerTop = 0,
		   	$footer = $(".footer-main");
		
	        footerHeight = $footer.height();
	        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight) - 15 +"px";
	        console.log("footerTop" + footerTop);
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
		}, 100);
			       
	}
});

$(window).bind("load", function() { 
       
	   
	positionFooter();

	function positionFooter() {

		setTimeout(function() {
			var footerHeight = 0,
		   	footerTop = 0,
		   	$footer = $(".footer-main");
		
	        footerHeight = $footer.height();
	        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight) - 15 +"px";
	        console.log("footerTop" + footerTop);
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
		}, 100);
			       
	}

	$(window)
	       .scroll(positionFooter)
	       .resize(positionFooter)            
});