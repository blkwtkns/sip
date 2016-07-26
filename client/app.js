require('angular');

var MainController = require('./controllers/MainController');
var TestController = require('./controllers/TestController');

var configOptions = [
	'$routeProvider',
	function($routeProvider) {
		// all routes are currently from the public folder
		$routeProvider
	    .when('/test', {
	      templateUrl: './partials/test.html',
	      controller: 'TestController'
	    })
	}
]

angular.module('app', [
	require('angular-route'),
	require('angular-animate')
	])
	.controller('MainController', ['$scope', '$http', MainController])
	.controller('TestController', ['$scope', TestController])
	.config(configOptions)
