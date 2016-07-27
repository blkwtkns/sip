require('./controllers/AceController');
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
	'Slurpee.AceController',
	'ui.ace'
	])
	.config(['$routeProvider', configFunction]);

function configFunction($routeProvider) {
		// all routes are currently from the public folder
		$routeProvider
	    .when('/test', {
	      templateUrl: './partials/test.html',
	      controller: 'TestController'
	    })
			.when('/recipes', {
				templateUrl: './partials/recipes.html',
				controller: 'RecipesController'
			});
	}
