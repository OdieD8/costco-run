/* global Firebase */
angular.module("app").controller("loginController", function($scope, $firebaseObject, $firebaseArray, $state) {

	var ref = new Firebase("https://costco-run.firebaseio.com/");

	$scope.login = function() {
		ref.authWithPassword({

			email: $scope.user.email,
			password: $scope.user.password
		}, function(error, authData) {

			if (error) {
				console.log("Login Failed!", error);

			} else {
				console.log("Authentication successful");
				$state.go('home');
			}

			$scope.authData = authData;
			console.log(authData);
		}, {

			remember: "sessiononly"
		});
	};
});
