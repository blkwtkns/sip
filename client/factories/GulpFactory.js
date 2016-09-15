// sends post request to server which reads all the gulp task files
angular
  .module('Slurpee.GulpFactory', ['ngRoute'])
  .factory('GulpFactory', ['$http', 'GulpAceFactory', function($http, gulpAceFactory) {
    return {
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
            gulpAceFactory.code += res.data + '\n';
            console.log('hi', gulpAceFactory.code);
          });
      },
      test: function() {
        // console.log(this.recipesList);
      },
      getDownload: function(){
        const payload = {
          finalRecipe: gulpAceFactory.code,
          type: 'gulpfile.js'
        };
        return $http.post('/download', payload);
      }
    };
  }]);
