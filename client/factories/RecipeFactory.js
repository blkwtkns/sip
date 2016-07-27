// sends post request to server which reads all the gulp task files
angular.module('Slurpee.RecipeFactory', ['ngRoute'])
  .factory('RecipeFactory', ['$http', function($http) {
    var strVar = "";
    strVar += "var gulp = require('gulp');";
    strVar += "var imageMin = require('gulp-imagemin');";
    strVar += "gulp.task('imageMin', function() {";
    strVar += "gulp.src('.\/assets\/img\/*')";
    strVar += "pipe(imageMin())";
    strVar += ".pipe(gulp.dest('.\/public\/img'));";
    strVar += "});";

    strVar = strVar.split(';');

    var getTest;

    return {
      imgMinRecipe: strVar,
      getTest: function() {
        return $http.get('/gulp-tasks');
      },
      getRecipesList: function() {
        return $http.get('/gulp-tasks-list');
      }
    };




  }]);
