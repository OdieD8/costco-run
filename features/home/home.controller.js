/* global Firebase */
angular.module("app").controller("homeController", function($scope, $firebaseObject, $firebaseArray, $state, userService) {

	var ref = new Firebase("https://costco-run.firebaseio.com/");
    
    var user = ref.getAuth();
    
    if (user === null) {
        alert("Please Login");
        $state.go("login");
    };
    
    $scope.list = $firebaseArray(ref);
    $scope.newItem = '';

    $scope.addItem = function(){
        var newItem = $scope.newItem.trim();
        if (!newItem.length) {
            
            return;
        }
        
        $scope.list.$add({
            title: newItem,
            completed: false
        });
        
        $scope.newItem = '';
    };
    
    $scope.removeItem = function(item){
        $scope.list.$remove(item);
    };
    
    $scope.logout = function() {
        userService.logout(ref);
    };
});