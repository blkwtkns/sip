angular.module('Slurpee.WebpackAceController', ['ngRoute'])
	.controller('WebpackAceController', ['$scope', function($scope) {
		// $scope.webpackAceCode = "var debug = process.env.NODE_ENV !== 'production';\n" +
		// 	"var webpack = require('webpack');\n\n" +
		// 	"module.exports = {\n\t" +
		// 	"context: __dirname,\n\t" +
		// 	"devtool: debug ? 'inline-sourcemap' : null,\n\t" +
		// 	"entry: './js/scripts.js',\n\t" +
		// 	"output: {\n\t\t" +
		// 	"path: __dirname + '/js',\n\t\t" +
		// 	"filename: 'scripts.min.js'\n\t" +
		// 	"},\n\t" +
		// 	"plugins: debug ? [] : [\n\t\t" +
		// 	"new webpack.optimize.DedupePlugin(),\n\t\t" +
		// 	"new webpack.optimize.DedupePlugin(),\n\t\t" +
		// 	"new webpack.optimize.DedupePlugin(),\n\t" +
		// 	"],\n" +
		// 	"};"
	}]);
