angular.module('Slurpee.MainController', ['ngRoute'])
	.controller('MainController', ['$scope', '$http', function($scope, $http) {
		$scope.ingredient = null;
		$scope.error = null;
		$scope.recipes = null;


		//Filter options
		$scope.filterOptions = false;
		$scope.textFilter = null;
		$scope.numLimit = null;

		$scope.searchRecipe = function() {

		};

		$scope.clearSearch = function() {
			$scope.ingredient = "";
		};

		$scope.clearFilter = function() {
			$scope.textFilter = "";
		};
	}]);
