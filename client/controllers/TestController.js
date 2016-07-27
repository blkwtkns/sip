angular.module('Slurpee.TestController', ['ngRoute'])
	.controller('TestController', ['$scope', function($scope) {
		$scope.test = 'Hello';
		$scope.messages = ['1', '2', '3', '4', '5'];
		$scope.select;
	}]);
