/* global Firebase */
angular.module("app").controller("homeController", function($scope, $firebaseObject, $firebaseArray, $state, userService) {

	var ref = new Firebase("https://costco-run.firebaseio.com/");
	var bakery = new Firebase("https://costco-run.firebaseio.com/Bakery");
	var drinks = new Firebase("https://costco-run.firebaseio.com/Drinks");
    var cheeseMeat = new Firebase("https://costco-run.firebaseio.com/CheeseMeat");
	var frozen = new Firebase("https://costco-run.firebaseio.com/Frozen");
	var fruitVegetables = new Firebase("https://costco-run.firebaseio.com/FruitVegetables");
	var paperCleaningProds = new Firebase("https://costco-run.firebaseio.com/PaperCleaningProds");
	var snacksChipsCandy = new Firebase("https://costco-run.firebaseio.com/SnacksChipsCandy");
	var other = new Firebase("https://costco-run.firebaseio.com/Other");

    var user = ref.getAuth();

    if (user === null) {
        alert("Please Login");
        $state.go("login");
    };

    $scope.bakery = $firebaseArray(bakery);
	$scope.drinks = $firebaseArray(drinks);
	$scope.cheeseMeat = $firebaseArray(cheeseMeat);
	$scope.frozen = $firebaseArray(frozen);
	$scope.fruitVegetables = $firebaseArray(fruitVegetables);
	$scope.paperCleaningProds = $firebaseArray(paperCleaningProds);
	$scope.snacksChipsCandy = $firebaseArray(snacksChipsCandy);
	$scope.other = $firebaseArray(other);

	$scope.dropDown = "Select Category";
    $scope.newItem = "";

    $scope.addItem = function(){

        var newItem = $scope.newItem.trim();
        if (!newItem.length) {

			alert("Please enter item");
            return;
        }

		if ($scope.dropDown === "Bakery") {

			$scope.bakery.$add({

				title: newItem,
				category: "bakery",
				completed: false
			});

		}

		if ($scope.dropDown === "Drinks") {

			$scope.drinks.$add({

				title: newItem,
				category: "drinks",
				completed: false
			});
		}

		if ($scope.dropDown === "Cheese/Meat") {

			$scope.cheeseMeat.$add({

				title: newItem,
				category: "cheeseMeat",
				completed: false
			});

		}

		if ($scope.dropDown === "Frozen") {

			$scope.frozen.$add({

				title: newItem,
				category: "frozen",
				completed: false
			});
		}

		if ($scope.dropDown === "Fruit/Vegetables") {

			$scope.fruitVegetables.$add({

				title: newItem,
				category: "fruitVegetables",
				completed: false
			});

		}

		if ($scope.dropDown === "Paper/CleaningProds") {

			$scope.paperCleaningProds.$add({

				title: newItem,
				category: "paperCleaningProds",
				completed: false
			});
		}

		if ($scope.dropDown === "Snacks/Chips/Candy") {

			$scope.snacksChipsCandy.$add({

				title: newItem,
				category: "snacksChipsCandy",
				completed: false
			});

		}

		if ($scope.dropDown === "Other") {

			$scope.other.$add({

				title: newItem,
				category: "other",
				completed: false
			});
		}

		$scope.dropDown = "Select Category";
        $scope.newItem = "";
    };

    $scope.removeItem = function(item){

		if (item.category === "bakery") {

			$scope.bakery.$remove(item);
		}

		if (item.category === "drinks") {

			$scope.drinks.$remove(item);
		}

		if (item.category === "cheeseMeat") {

			$scope.cheeseMeat.$remove(item);
		}

		if (item.category === "frozen") {

			$scope.frozen.$remove(item);
		}

		if (item.category === "fruitVegetables") {

			$scope.fruitVegetables.$remove(item);
		}

		if (item.category ==="paperCleaningProds") {

			$scope.paperCleaningProds.$remove(item);
		}

		if (item.category ==="snacksChipsCandy") {

			$scope.snacksChipsCandy.$remove(item);
		}

		if (item.category ==="other") {

			$scope.other.$remove(item);
		}
    };

    $scope.logout = function() {
        userService.logout(ref);
    };
});
