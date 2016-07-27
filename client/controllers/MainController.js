angular.module('Slurpee.MainController', ['ngRoute'])
	.controller('MainController', ['$scope', '$http',  'GulpFactory', 'WebpackFactory', 'GulpAceFactory', 'WebpackAceFactory',
	function($scope, $http, gulpFactory, webpackFactory, gulpAceFactory, webpackAceFactory) {
		$scope.gulpIngredient = null;
		$scope.webpackIngrendient = null;
		// Ace editor model binding
		$scope.aceChecked;


		//Filter options
		$scope.filterOptions = false;
		$scope.textFilter = null;
		$scope.numLimit = null;

		$scope.searchGulp = function(gulpIngredient) {
			if (gulpIngredient) {
				gulpFactory.getRecipe(gulpIngredient);
				return;
			}
			if ($scope.gulpIngredient === '') return;
			var isInList = false;
			console.log($scope.gulpIngredient);
			console.log(gulpFactory.recipesList);
			for (var i = 0; i < gulpFactory.recipesList.length; i++) {
				if (gulpFactory.recipesList[i] === $scope.gulpIngredient) {
					isInList = true;
					break;
				}
			}
			if (isInList === false) {
				console.log('gulpIngredient not in list');
				return;
			}
			console.log($scope.gulpIngredient);
			gulpFactory.getRecipe($scope.gulpIngredient);
			$scope.clearSearch();

		};

		$scope.searchWebpack = function(webpackIngredient) {
			if (webpackIngredient) {
				webpackFactory.getRecipe(webpackIngredient);
				return;
			}
			if ($scope.webpackIngrendient === '') return;
			var isInList = false;
			console.log($scope.webpackIngrendient);
			console.log(webpackFactory.recipesList);
			for (var i = 0; i < webpackFactory.recipesList.length; i++) {
				if (webpackFactory.recipesList[i] === $scope.webpackIngrendient) {
					isInList = true;
					break;
				}
			}
			if (isInList === false) {
				console.log('webpackIngrendient not in list');
				return;
			}
			console.log($scope.webpackIngrendient);
			webpackFactory.getRecipe($scope.webpackIngrendient);
			$scope.clearSearch2();

		};

		$scope.clearSearch = function() {
			$scope.gulpIngredient = '';
		};

		$scope.clearSearch2 = function() {
			$scope.webpackIngrendient = '';
		}

		$scope.clearFilter = function() {
			$scope.textFilter = "";
		};

    $scope.download = function(){
      console.log('wtf');
      gulpFactory.getDownload();
    };

	}]);
