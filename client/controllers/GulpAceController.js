angular
  .module('Slurpee.GulpAceController', ['ngRoute'])
	.controller('GulpAceController', ['$scope', 'GulpAceFactory', function($scope, gulpAceFactory) {

  setInterval(function () {
    $scope.$apply(function () {
      $scope.code = gulpAceFactory.code;
    });
  }, 100);

  $scope.clear = function() {
    gulpAceFactory.code = "var gulp = require('gulp');\n\n";
  };
}]);
