require('angular');

var MainController = require('./controllers/MainController');
var TestController = require('./controllers/TestController');
var RecipesController = require('./controllers/RecipesController');
var configOptions = [
	'$routeProvider',
	function($routeProvider) {
		// all routes are currently from the public folder
		$routeProvider
	    .when('/test', {
	      templateUrl: './partials/test.html',
	      controller: 'TestController'
	    })
			.when('/recipes', {
				templateUrl: './partials/recipes.html'
				// controller: 'RecipesController'
			})
	}
]

angular.module('app', [
	require('angular-route'),
	require('angular-animate')
	])
	.controller('MainController', ['$scope', '$http', MainController])
	.controller('TestController', ['$scope', TestController])
	.controller('RecipesController' ['$scope', RecipesController])
	.config(configOptions)
