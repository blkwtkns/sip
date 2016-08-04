angular
	.module('Slurpee.WebpackController', ['ngRoute'])
	.controller('WebpackController', ['$scope', 'WebpackFactory', function($scope, webpackFactory) {
		$scope.header = 'Webpack Sip Recipes';
		$scope.singleRecipe = webpackFactory.imgMinRecipe;
		$scope.recipesList = webpackFactory.recipesList;
		$scope.recipe = null;

		// Assign class name for ng-animate between views
		$scope.configView = 'webpack-view';

		webpackFactory.getRecipesList().then(function(res) {
			$scope.recipesList = res.data;
			// on success write list into the factory
			webpackFactory.recipesList = res.data;
		});

		$scope.test = function() {
			webpackFactory.test();
		};
	}]);
