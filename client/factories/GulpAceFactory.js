angular.module('Slurpee.GulpAceFactory', ['ngRoute'])
  .factory('GulpAceFactory', [function() {
    return {
      code: "var gulp = require('gulp');\n\n"
    };
  }]);
