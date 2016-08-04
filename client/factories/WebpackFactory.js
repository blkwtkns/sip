angular.module('Slurpee.WebpackFactory', ['ngRoute'])
  .factory('WebpackFactory', ['$http', 'WebpackAceFactory', function($http, webpackAceFactory) {
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
            webpackAceFactory.code += res.data + '\n';
            console.log(webpackAceFactory.code);
          });
      },
      test: function() {
        console.log(this.recipesList);
      }

    };




  }]);
