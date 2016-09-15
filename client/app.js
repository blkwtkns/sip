// Controllers
require('./controllers/MainController');
require('./controllers/GulpController');
require('./controllers/GulpAceController');
require('./controllers/WebpackController');
require('./controllers/WebpackAceController');

// Factories
require('./factories/GulpFactory');
require('./factories/GulpAceFactory');
require('./factories/WebpackFactory');
require('./factories/WebpackAceFactory');


angular.module('app', [
	require('angular-route'),
	require('angular-animate'),
	'Slurpee.MainController',
	'Slurpee.GulpController',
	'Slurpee.GulpFactory',
	'Slurpee.GulpAceController',
	'Slurpee.GulpAceFactory',
	'Slurpee.WebpackController',
	'Slurpee.WebpackFactory',
	'Slurpee.WebpackAceController',
	'Slurpee.WebpackAceFactory',
	'ui.ace'
	])
	.config(['$routeProvider', configFunction]);

function configFunction($routeProvider) {
  	// all routes are currently from the public folder
		$routeProvider
	    .when('/webpack-recipe', {
	      templateUrl: './partials/webpack-recipe.html',
	      controller: 'WebpackController'
	    })
			.when('/recipes', {
				templateUrl: './partials/recipes.html',
				controller: 'GulpController'
			});
	}
