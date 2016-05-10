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
	$scope.saveData = function(){
		$scope.showControls=false;
	}
});