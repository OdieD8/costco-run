/* global Firebase */
angular.module("app").controller("homeController", function($scope, $firebaseObject, $firebaseArray, $state, userService) {

	var ref = new Firebase("https://costco-run.firebaseio.com/");
	var bakery = new Firebase("https://costco-run.firebaseio.com/Bakery");
	var cannedGoods = new Firebase("https://costco-run.firebaseio.com/CannedGoods");
	var dairy = new Firebase("https://costco-run.firebaseio.com/Dairy");
	var drinks = new Firebase("https://costco-run.firebaseio.com/Drinks");
	var frozen = new Firebase("https://costco-run.firebaseio.com/Frozen");
	var fruitVegetables = new Firebase("https://costco-run.firebaseio.com/FruitVegetables");
	var grains = new Firebase("https://costco-run.firebaseio.com/grains");
	var meat = new Firebase("https://costco-run.firebaseio.com/meat");
	var paperCleaningProds = new Firebase("https://costco-run.firebaseio.com/PaperCleaningProds");
	var snacksChipsCandy = new Firebase("https://costco-run.firebaseio.com/SnacksChipsCandy");
	var other = new Firebase("https://costco-run.firebaseio.com/Other");

    var user = ref.getAuth();

    if (user === null) {
        alert("Please Login");
        $state.go("login");
    };

	user = sessionStorage.getItem("user");

	switch (user) {

		case "odie.demoura@shipsource.com":
			user = "Odie";
			break;

		case "eric.bulloch@shipsource.com":
			user = "Eric";
			break;

		case "g.singh@shipsource.com":
			user = "G-Money";
			break;

		case "royal@movemethod.com":
			user = "Royal";
			break;

		case "colton@movemethod.com":
			user = "Colton";
			break;

		case "ty@movemethod.com":
			user = "Silky Johnston";
			break;

		case "brennon@movemethod.com":
			user = "Brennon";
			break;

		case "berg@movemethod.com":
			user = "Berg";
			break;

		case "wade@movemethod.com":
			user = "Wade";
			break;

		case "frank@movemethod.com":
			user = "The Passer";
			break;

		case "ryan@movemethod.com":
			user = "Ryan";
			break;

		case "seth@movemethod.com":
			user = "Sete";
			break;

		case "rwarnick@essentialhub.com":
			user = "Warnick";
			break;
		default:
			user = "guest";
	}

    $scope.bakery = $firebaseArray(bakery);
	$scope.cannedGoods = $firebaseArray(cannedGoods);
	$scope.dairy = $firebaseArray(dairy);
	$scope.drinks = $firebaseArray(drinks);
	$scope.meat = $firebaseArray(meat);
	$scope.frozen = $firebaseArray(frozen);
	$scope.fruitVegetables = $firebaseArray(fruitVegetables);
	$scope.grains = $firebaseArray(grains);
	$scope.paperCleaningProds = $firebaseArray(paperCleaningProds);
	$scope.snacksChipsCandy = $firebaseArray(snacksChipsCandy);
	$scope.other = $firebaseArray(other);

	$scope.dropDown = "Select Category";
    $scope.newItem = "";

    $scope.addItem = function(){

        var newItem = $scope.newItem.trim();
        if (!newItem.length) {

			alert("Please enter item");
			$scope.dropDown = "Select Category";
    		$scope.newItem = "";
            return;
        }

		if ($scope.dropDown === "Bakery") {

			$scope.bakery.$add({

				title: newItem,
				category: "bakery",
				user: user,
				completed: false
			});

		}

		if ($scope.dropDown === "Canned Goods") {

			$scope.cannedGoods.$add({

				title: newItem,
				category: "canned goods",
				user: user,
				completed: false
			});

		}

		if ($scope.dropDown === "Dairy") {

			$scope.dairy.$add({

				title: newItem,
				category: "dairy",
				user: user,
				completed: false
			});
		}

		if ($scope.dropDown === "Drinks") {

			$scope.drinks.$add({

				title: newItem,
				category: "drinks",
				user: user,
				completed: false
			});
		}

		if ($scope.dropDown === "Meat") {

			$scope.meat.$add({

				title: newItem,
				category: "meat",
				user: user,
				completed: false
			});

		}

		if ($scope.dropDown === "Frozen") {

			$scope.frozen.$add({

				title: newItem,
				category: "frozen",
				user: user,
				completed: false
			});
		}

		if ($scope.dropDown === "Fruit/Vegetables") {

			$scope.fruitVegetables.$add({

				title: newItem,
				category: "fruitVegetables",
				user: user,
				completed: false
			});

		}

		if ($scope.dropDown === "Grains") {

			$scope.grains.$add({

				title: newItem,
				category: "grains",
				user: user,
				completed: false
			});

		}

		if ($scope.dropDown === "Paper/CleaningProds") {

			$scope.paperCleaningProds.$add({

				title: newItem,
				category: "paperCleaningProds",
				user: user,
				completed: false
			});
		}

		if ($scope.dropDown === "Snacks/Chips/Candy") {

			$scope.snacksChipsCandy.$add({

				title: newItem,
				category: "snacksChipsCandy",
				user: user,
				completed: false
			});

		}

		if ($scope.dropDown === "Other") {

			$scope.other.$add({

				title: newItem,
				category: "other",
				user: user,
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

		if (item.category === "canned goods") {

			$scope.cannedGoods.$remove(item);
		}

		if (item.category === "dairy") {

			$scope.dairy.$remove(item);
		}

		if (item.category === "drinks") {

			$scope.drinks.$remove(item);
		}

		if (item.category === "meat") {

			$scope.meat.$remove(item);
		}

		if (item.category === "frozen") {

			$scope.frozen.$remove(item);
		}

		if (item.category === "fruitVegetables") {

			$scope.fruitVegetables.$remove(item);
		}

		if (item.category === "grains") {

			$scope.grains.$remove(item);
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
