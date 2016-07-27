angular.module('Slurpee.WebpackController', ['ngRoute'])
	.controller('WebpackController', ['$scope', function($scope) {
		$scope.test = 'Hello';
		$scope.messages = ['1', '2', '3', '4', '5'];
		$scope.select;
	}]);
