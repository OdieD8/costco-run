angular.module("app", ["ui.router", "firebase"])
.constant("fb", {url: "https://costco-run.firebaseio.com/"})
.config(function($urlRouterProvider, $stateProvider) {
	
	$stateProvider
	
		.state("login", {
			url: "/login",
			templateUrl: "./features/login/login.template.html",
			controller: "loginController"
		})
		
		.state("home", {
			url: "/home",
			templateUrl: "features/home/home.template.html",
			controller: "homeController"
		})
		
		$urlRouterProvider.otherwise("/login");
});