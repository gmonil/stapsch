var app = angular.module("schoolSettingsApp",[]);
app.controller("schoolSettingsController",function($scope){
	$scope.showControls = false;
	$scope.principalName = "Roshni Mhatre";
	$scope.board = "Maharashtra State Board";
	$scope.medium="English";
	$scope.contact1="111111";
	$scope.contact2="333333";
	$scope.contact3="222222";
	$scope.email1="admin@school.com";
	$scope.email2="info@school.com";
	$scope.address1="Sudam Bhoir Bldg";
	$scope.address2="Jaihind colony";
	$scope.address3="G. Gupte Road";
	$scope.address4="Dombivli (E)";
	$scope.address5="Maharashtra";

	$scope.editData = function(){
		$scope.showControls1 = $scope.showControls;
		$scope.principalName1 = $scope.principalName;
		$scope.board1 = $scope.board;
		$scope.medium1=$scope.medium;
		$scope.contact11=$scope.contact1;
		$scope.contact21=$scope.contact2;
		$scope.contact31=$scope.contact3;
		$scope.email11=$scope.email1;
		$scope.email21=$scope.email2;
		$scope.address11=$scope.address1;
		$scope.address21=$scope.address2;
		$scope.address31=$scope.address3;
		$scope.address41=$scope.address4;
		$scope.address51=$scope.address5;
		$scope.showControls=true;
	}

	$scope.saveData = function(){
		$scope.showControls = $scope.showControls1;
		$scope.principalName = $scope.principalName1;
		$scope.board = $scope.board1;
		$scope.medium=$scope.medium1;
		$scope.contact1=$scope.contact11;
		$scope.contact2=$scope.contact21;
		$scope.contact3=$scope.contact31;
		$scope.email1=$scope.email11;
		$scope.email2=$scope.email21;
		$scope.address1=$scope.address11;
		$scope.address2=$scope.address21;
		$scope.address3=$scope.address31;
		$scope.address4=$scope.address41;
		$scope.address5=$scope.address51;
		$scope.showControls=false;
	}
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
	                top: footerTop
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