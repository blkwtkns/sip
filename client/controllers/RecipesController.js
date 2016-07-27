
angular.module('Slurpee.RecipesController', ['ngRoute'])
	.controller('RecipesController', ['$scope', 'RecipeFactory',
		function($scope, recipeFactory) {
			$scope.header = 'List of Recipes';

			$scope.singleRecipe = recipeFactory.imgMinRecipe;

			$scope.recipesList = recipeFactory.recipesList;
			$scope.recipe = null;
			recipeFactory.getRecipesList().then(function(res) {
				$scope.recipesList = res.data;
				// on success write list into the factory
				recipeFactory.recipesList = res.data;
			});

			$scope.test = function() {
				recipeFactory.test();
			};
		}]);
