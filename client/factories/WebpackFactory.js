angular.module('Slurpee.WebpackFactory', ['ngRoute'])
  .factory('WebpackFactory', ['$http', function($http) {
    return {
      recipesList: [],
      getRecipesList: function() {
        return $http.get('/webpack-tasks');
      },
      saveRecipesList: function(recipesList) {
        recipesList = recipesList;
      },
      getRecipe: function(ingredient) {
        const data = {
          ingredient: ingredient
        };
        return $http.post('/webpack-tasks', data)
          .then(function(res) {
            console.log(res.data);
          });
      },
      test: function() {
        console.log(this.recipesList);
      }

    };




  }]);
