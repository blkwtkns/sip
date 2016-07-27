
require('./controllers/MainController');
require('./controllers/WebpackController');
require('./controllers/GulpController');
require('./controllers/GulpAceController');
require('./controllers/WebpackAceController');


require('./factories/GulpFactory');
require('./factories/WebpackFactory');
require('./factories/GulpAceFactory');
require('./factories/WebpackAceFactory');


angular.module('app', [
	require('angular-route'),
	require('angular-animate'),
	'Slurpee.MainController',
	'Slurpee.GulpController',
	'Slurpee.WebpackController',
	'Slurpee.GulpAceController',
	'Slurpee.WebpackAceController',
	'Slurpee.GulpFactory',
	'Slurpee.WebpackFactory',
	'Slurpee.WebpackAceFactory',
	'Slurpee.GulpAceFactory',
	'ui.ace'
	])
	.config(['$routeProvider', configFunction]);

function configFunction($routeProvider) {
		// all routes are currently from the public folder
		$routeProvider
			// .when('/', {
			// 	templateUrl: './partials/home-partial.html',
			// 	controller: ''
			// })
	    .when('/webpack-recipe', {
	      templateUrl: './partials/webpack-recipe.html',
	      controller: 'WebpackController'
	    })
			.when('/recipes', {
				templateUrl: './partials/recipes.html',
				controller: 'GulpController'
			});
	}
