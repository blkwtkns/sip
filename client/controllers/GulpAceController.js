angular.module('Slurpee.GulpAceController', ['ngRoute'])
	.controller('GulpAceController', ['$scope', function($scope) {
		$scope.aceCode = "var gulp = require('gulp');\n" +
			"var requireDir = require('require-dir');\n" +
			"var nodemon = require('gulp-nodemon');\n\n" +
			"gulp.task('reset', function() {\n\t" +
			"return;\n" +
			"});\n\n" +
			"requireDir('./gulp-tasks');\n\n" +
			"gulp.task('watch', function() {\n\t" +
			"gulp.watch('./client/**/*.js', ['browserify']);\n\t" +
			"gulp.watch('./assets/sass/style.sass', ['sass']);\n\t" +
			"gulp.watch('./public/index.html', ['reset']);\n" +
			"});\n\n" +
			"gulp.task('gulpmon', function () {\n\t" +
			"nodemon({\n\t\t" +
			"script: './server/server.js',\n\t\t" +
			"ext: 'js',\n\t\t" +
			"env: { 'NODE_ENV': 'development' }\n\t" +
			"});\n" +
			"});\n\n" +
			"gulp.task('default', ['gulpmon', 'browserify', 'sass', 'imageMin', 'watch']);"
	}]);
