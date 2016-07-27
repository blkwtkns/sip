angular.module('Slurpee.MainController', ['ngRoute'])
	.controller('MainController', ['$scope', '$http',  'RecipeFactory', function($scope, $http, recipeFactory) {
		$scope.ingredient = null;


		//Filter options
		$scope.filterOptions = false;
		$scope.textFilter = null;
		$scope.numLimit = null;

		$scope.recipesList = recipeFactory.recipesList;

		$scope.searchRecipe = function() {
			if ($scope.ingredients === '') return;
			var isInList = false;
			console.log($scope.recipesList);
			for (var i = 0; i < $scope.recipesList.length; i++) {
				if ($scope.recipesList[i] === data) {
					isInList = true;
					break;
				}
			}
			if (isInList === false) {
				console.log('ingredients not in list');
				return;
			}

			console.log($scope.ingredient);
			recipeFactory.getRecipe($scope.ingredient);
		};

		$scope.clearSearch = function() {
			$scope.ingredient = "";
		};

		$scope.clearFilter = function() {
			$scope.textFilter = "";
		};
	}]);
