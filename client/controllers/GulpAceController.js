angular.module('Slurpee.GulpAceController', ['ngRoute'])
	.controller('GulpAceController', ['$scope', 'GulpAceFactory', function($scope, gulpAceFactory) {

  setInterval(function () {
    $scope.$apply(function () {
      $scope.code = gulpAceFactory.code;
    });
  }, 100);

  $scope.clear = function() {
    gulpAceFactory.code = "var gulp = require('gulp');\n\n";
    $scope.code = "var gulp = require('gulp');\n\n";
  };
    // $scope.aceLoaded = function(_editor) {
    //   console.log(_editor[1]);
    //   _editor.setReadOnly(true);
    // };
    //
    // $scope.aceChanged = function(e) {
    //   console.log(e[0]);
    // };

	}]);
