require('angular')
var MainController = require('./controllers/MainController')

angular.module('app', [
	require('angular-route'),
	require('angular-animate')
	])
	.controller('MainController', ['$scope', '$http', MainController])
