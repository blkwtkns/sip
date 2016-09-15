angular
	.module('Slurpee.MainController', ['ngRoute'])
	.controller('MainController', ['$scope', '$http',  'GulpFactory', 'WebpackFactory', 'GulpAceFactory', 'WebpackAceFactory', '$location',
	function($scope, $http, gulpFactory, webpackFactory, gulpAceFactory, webpackAceFactory, $location) {
		$scope.gulpIngredient;
		$scope.webpackIngredient;
		// Ace editor model binding

		//Filter options
		$scope.filterOptions = false;
		$scope.textFilter = null;
		$scope.numLimit = null;

		// initial population of gulp and webpack recipe lists
		gulpFactory.getRecipesList().then(function(res) {
			// console.log('initial populate of gulp list');
			// on success write list into the factory
			gulpFactory.recipesList = res.data;
		});
		webpackFactory.getRecipesList().then(function(res) {
			// console.log('initial populate of webpack list');
			// on success write list into the factory
			webpackFactory.recipesList = res.data;
		});

		$scope.changeGulpView = function() {
			$location.path('/recipes');
		};

		$scope.changeWebpackView = function() {
			$location.path('/webpack-recipe');
		};

		$scope.searchGulp = function(gulpIngredient) {
			$location.path('/recipes'); // switches views relative
			if (gulpIngredient) {
				gulpFactory.getRecipe(gulpIngredient);
				return;
			}
			if ($scope.gulpIngredient === '') return;
			var isInList = false;
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
			gulpFactory.getRecipe($scope.gulpIngredient);
			$scope.clearSearch();
		};

		$scope.searchWebpack = function(webpackIngredient) {
			$location.path('/webpack-recipe');
			if (webpackIngredient) {
				webpackFactory.getRecipe(webpackIngredient);
				return;
			}

			if ($scope.webpackIngrendient === '') return;
			var isInList = false;
			for (var i = 0; i < webpackFactory.recipesList.length; i++) {
				if (webpackFactory.recipesList[i] === $scope.webpackIngrendient) {
					isInList = true;
					break;
				}
			}

			if (isInList === false) {
				// console.log('webpackIngrendient not in list');
				return;
			}

			webpackFactory.getRecipe($scope.webpackIngrendient);
			$scope.clearSearch2();
		};

		// Clears search input field on submit
		$scope.clearSearch = function() {
			$scope.gulpIngredient = '';
		};

		$scope.clearSearch2 = function() {
			$scope.webpackIngredient = '';
		}

    $scope.download = function(){
      if($location.path() === '/recipes'){
        gulpFactory.getDownload();
      }else{
        webpackFactory.getDownload();
      }
    };

	}]);
