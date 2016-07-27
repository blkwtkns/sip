require('./controllers/GulpAceController');
require('./controllers/WebpackAceController');
require('./controllers/MainController');
require('./controllers/TestController');
require('./controllers/RecipesController');
require('./factories/RecipeFactory');

angular.module('app', [
	require('angular-route'),
	require('angular-animate'),
	'Slurpee.MainController',
	'Slurpee.TestController',
	'Slurpee.RecipesController',
	'Slurpee.RecipeFactory',
	'Slurpee.GulpAceController',
	'Slurpee.WebpackAceController',
	'ui.ace'
	])
	.config(['$routeProvider', configFunction]);

function configFunction($routeProvider) {
		// all routes are currently from the public folder
		$routeProvider
	    .when('/webpack-recipe', {
	      templateUrl: './partials/webpack-recipe.html',
	      controller: 'TestController'
	    })
			.when('/recipes', {
				templateUrl: './partials/recipes.html',
				controller: 'RecipesController'
			});
	}
