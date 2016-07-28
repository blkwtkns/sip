angular.module('Slurpee.WebpackAceController', ['ngRoute'])
	.controller('WebpackAceController', ['$scope', 'WebpackAceFactory',
	function($scope, webpackAceFactory) {
		setInterval(function () {
			$scope.$apply(function () {
				$scope.code = webpackAceFactory.code;
			});
		}, 100);
	}]);
