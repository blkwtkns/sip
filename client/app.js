
require('./controllers/MainController');
require('./controllers/TestController');
require('./controllers/RecipesController');
require('./controllers/GulpAceController');
require('./controllers/WebpackAceController');

require('./factories/RecipeFactory');
require('./factories/GulpAceFactory');
require('./factories/WebpackAceFactory');

angular.module('app', [
	require('angular-route'),
	require('angular-animate'),
	'Slurpee.MainController',
	'Slurpee.TestController',
	'Slurpee.RecipesController',
	'Slurpee.GulpAceController',
	'Slurpee.WebpackAceController',
	'Slurpee.RecipeFactory',
	'Slurpee.WebpackAceFactory',
	'Slurpee.GulpAceFactory',
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
