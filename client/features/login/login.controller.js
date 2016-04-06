/* global Firebase */
angular.module("app").controller("loginController", function($scope, $firebaseObject, $firebaseArray, $state, userService) {

	var ref = new Firebase("https://costco-run.firebaseio.com/");
	
	$scope.login = function() {
		
		var email = $scope.user.email;
		var password = $scope.user.password;
		
		userService.login(ref, email, password);
	}
});
