
angular.module('Slurpee.RecipesController', ['ngRoute'])
	.controller('RecipesController', ['$scope', 'RecipeFactory',
		function($scope, recipeFactory) {
			$scope.header = 'List of Recipes';
			$scope.recipeSearch = '';
			$scope.recipesTest = recipeFactory.imgMinRecipe;
			$scope.recipesList = null;
			$scope.test = null;

			recipeFactory.getTest().then(function(res) {
				$scope.test = JSON.stringify(res.data);
			});

			recipeFactory.getRecipesList().then(function(res) {
				$scope.recipesList = res.data;
			});

			$scope.findRecipe = function() {
				console.log($scope.recipesList);
			};
		}]);
