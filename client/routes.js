angular.module("app", ["ui.router"]).config(function($urlRouterProvider, $stateProvider) {
	
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