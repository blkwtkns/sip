angular.module('Slurpee.WebpackAceFactory', ['ngRoute'])
  .factory('WebpackAceFactory', [function() {
    return {
      code: 'var webpack = require("webpack");\n\n'
    };
  }]);
