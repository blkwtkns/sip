angular.module('Slurpee.GulpController', ['ngRoute'])
	.controller('GulpController', ['$scope', 'GulpFactory', '$location', 'GulpAceFactory', function($scope, gulpFactory, $location, gulpAceFactory) {
		$scope.header = 'Gulp Sip Recipes';

		$scope.singleRecipe = gulpFactory.imgMinRecipe;

		$scope.recipesList = gulpFactory.recipesList;
		$scope.recipe = null;
		gulpFactory.getRecipesList().then(function(res) {
			$scope.recipesList = res.data;

			// on success write list into the factory
			gulpFactory.recipesList = res.data;
		});

		$scope.test = function() {
			gulpFactory.test();
		};
	}]);
