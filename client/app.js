require('angular');
require('./controllers/MainController');
require('./controllers/TestController');
require('./controllers/RecipesController');
//
// var MainController = require('./controllers/MainController');
// var TestController = require('./controllers/TestController');
// var RecipesController = require('./controllers/RecipesController');


angular.module('app', [
	require('angular-route'),
	require('angular-animate'),
	'Slurpee.MainController',
	'Slurpee.TestController',
	'Slurpee.RecipesController'
	])
	// .controller('MainController', ['$scope', '$http', MainController])
	// .controller('TestController', ['$scope', TestController])
	// .controller('RecipesController' ['$scope', RecipesController])
	.config(['$routeProvider', configFunction])

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
			})
	}
