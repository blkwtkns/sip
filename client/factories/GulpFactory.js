// sends post request to server which reads all the gulp task files
angular.module('Slurpee.GulpFactory', ['ngRoute'])
  .factory('GulpFactory', ['$http', function($http) {
    var strVar = "";
    strVar += "var gulp = require('gulp');";
    strVar += "var imageMin = require('gulp-imagemin');";
    strVar += "gulp.task('imageMin', function() {";
    strVar += "gulp.src('.\/assets\/img\/*')";
    strVar += "pipe(imageMin())";
    strVar += ".pipe(gulp.dest('.\/public\/img'));";
    strVar += "});";

    strVar = strVar.split(';');

    return {
      imgMinRecipe: strVar,
      recipesList: [],
      getRecipesList: function() {
        return $http.get('/gulp-tasks');
      },
      saveRecipesList: function(recipesList) {
        recipesList = recipesList;
      },
      getRecipe: function(ingredient) {
        const data = {
          ingredient: ingredient
        };
        return $http.post('/gulp-tasks', data)
          .then(function(res) {
            console.log(res.data);
          });
      },
      test: function() {
        console.log(this.recipesList);
      }

    };




  }]);
