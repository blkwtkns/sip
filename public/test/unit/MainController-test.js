describe('Testing AngularJS Test Suite', function() {

  beforeEach(module('app'))
  it('should have tests', function() {
    expect(true).toBe(true);
  });

  describe('Testing AngularJS Controller MainController', function() {
  var scope, ctrl, httpBackend, timeout, rootScope;

  beforeEach(function() {
    module(function($provide) {

      var strVar = "";
      strVar += "var gulp = require('gulp');";
      strVar += "var imageMin = require('gulp-imagemin');";
      strVar += "gulp.task('imageMin', function() {";
      strVar += "gulp.src('.\/assets\/img\/*')";
      strVar += "pipe(imageMin())";
      strVar += ".pipe(gulp.dest('.\/public\/img'));";
      strVar += "});";
      strVar = strVar.split(';');

      var recipesList = [];

      var MockedGulpFactory = {

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
            });
        },
        getDownload: function() {
          return $http.get('/download');
        }};
      $provide.value('GulpFactory', MockedGulpFactory);
    });
  });
  });

  beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout, GulpFactory) {
    httpBackend = $httpBackend;
    rootScope = $rootScope;
    scope = $rootScope.$new();
    ctrl = $controller('MainController', {$scope:scope});
    timeout = $timeout
  }))

    describe('Testing existence and default values of scope properties and methods on MainController', function() {

      it('should have scope property filterOptions', function() {
        expect(scope.filterOptions).toBeDefined();
        expect(scope.filterOptions).toBe(false);
      });
      it('should have scope property textFilter', function() {
        expect(scope.textFilter).toBeDefined();
        expect(scope.textFilter).toBe(null);
      });
      it('should have scope property numLimit', function() {
        expect(scope.numLimit).toBeDefined();
        expect(scope.numLimit).toBe(null);
      });
      it('should have scope function searchGulp', function() {
        expect(scope.searchGulp).toBeDefined();
        expect(typeof scope.searchGulp).toBe('function');
      });
    });

    describe('testing clearSearch function', function() {

      it('should clear the gulpIngredient field', function() {
        scope.gulpIngredient = "random";
        expect(scope.gulpIngredient.length).toBe(6);
        scope.clearSearch();
        expect(scope.gulpIngredient.length).toBe(0);
      });

      it('should clear the webpackIngredient field', function() {
        scope.webpackIngredient = "random";
        expect(scope.webpackIngredient.length).toBe(6);
        scope.clearSearch2();
        expect(scope.webpackIngredient.length).toBe(0);
      });
    });

    describe('testing clearFilter function', function() {

      it('should clear the filter field', function() {
        scope.textFilter = "random";
        expect(scope.textFilter.length).toBe(6);
        scope.clearFilter();
        expect(scope.textFilter.length).toBe(0);
      });
    });

    describe('Testing searchGulp', function() {
      it('should call the function getRecipe', function() {
        spyOn(scope, 'searchGulp');
        scope.searchGulp();
        expect(scope.searchGulp).toHaveBeenCalled();
      });
    });

    describe('Testing download', function () {
      it('should call the function download', function() {
        spyOn(scope, 'download');
        scope.download();
        expect(scope.download).toHaveBeenCalled();
      });
    });
});
