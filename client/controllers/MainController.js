angular.module('Slurpee.MainController', ['ngRoute'])
	.controller('MainController', ['$scope', '$http',  'GulpFactory', 'GulpAceFactory', 'WebpackAceFactory',
	function($scope, $http, gulpFactory, gulpAceFactory, webpackAceFactory) {
		$scope.ingredient = null;
		// Ace editor model binding
		$scope.aceChecked;


		//Filter options
		$scope.filterOptions = false;
		$scope.textFilter = null;
		$scope.numLimit = null;

		$scope.recipesList = gulpFactory.recipesList;

		$scope.searchRecipe = function() {
			if ($scope.ingredients === '') return;
			var isInList = false;
			console.log($scope.ingredient);
			console.log(gulpFactory.recipesList);
			for (var i = 0; i < gulpFactory.recipesList.length; i++) {
				if (gulpFactory.recipesList[i] === $scope.ingredient) {
					isInList = true;
					break;
				}
			}
			if (isInList === false) {
				console.log('ingredients not in list');
				return;
			}
			console.log($scope.ingredient);
			gulpFactory.getRecipe($scope.ingredient);
			$scope.clearSearch();

		};

		$scope.clearSearch = function() {
			$scope.ingredient = "";
		};

		$scope.clearFilter = function() {
			$scope.textFilter = "";
		};
	}]);
