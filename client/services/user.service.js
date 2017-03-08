angular.module("app").service("userService", function($firebaseObject, $firebaseArray, $state) {

	this.login = function(ref, email, password) {

		ref.authWithPassword({

			email: email,
			password: password
		}, function(error, authData) {

			if (error) {
				alert(error);
			}
			else {
				$state.go("home");
				sessionStorage.setItem("user", authData.password.email);
			}
		}, {
			remember: "sessiononly"
		});
	};

	this.logout = function(ref) {

        $state.go("login");
		ref.unauth();
    };
});
