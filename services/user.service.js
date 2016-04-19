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
			}
		}, {
			
			remember: "sessiononly"
		});
	};
	
	this.logout = function(ref) {
		
        ref.unauth();
        $state.go("login");
		console.log("hit logout function in service");
    };
})