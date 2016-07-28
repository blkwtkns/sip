angular.module('Slurpee.WebpackAceController', ['ngRoute'])
	.controller('WebpackAceController', ['$scope', 'WebpackAceFactory',
	function($scope, webpackAceFactory) {
		setInterval(function () {
			$scope.$apply(function () {
				$scope.code = webpackAceFactory.code;
			});
		}, 100);

		$scope.clear = function() {
			console.log('')
			gulpAceFactory.code = 'var webpack = require("webpack");\n\n';
			$scope.code = 'var webpack = require("webpack");\n\n';
		};
	}]);
