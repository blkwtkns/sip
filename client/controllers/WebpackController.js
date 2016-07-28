angular.module('Slurpee.WebpackController', ['ngRoute'])
	.controller('WebpackController', ['$scope', 'WebpackFactory', function($scope, webpackFactory) {
		$scope.header = 'Webpack Sip Recipes';

		// Assign class name for ng-animate between views
		$scope.configView = 'webpack-view';

		$scope.singleRecipe = webpackFactory.imgMinRecipe;

		$scope.recipesList = webpackFactory.recipesList;
		$scope.recipe = null;
		webpackFactory.getRecipesList().then(function(res) {
			$scope.recipesList = res.data;
			// on success write list into the factory
			console.log('webpack');
			console.log(res.data);
			webpackFactory.recipesList = res.data;
		});

		$scope.test = function() {
			webpackFactory.test();
		};
	}]);
