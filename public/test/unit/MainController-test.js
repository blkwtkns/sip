describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))
  it('should have tests', function (){
    expect(true).toBe(true);
  });

  describe('Testing AngularJS Controller MainController', function () {
  var scope, ctrl, httpBackend, timeout, rootScope;

  // beforeEach(function () {
  //   module(function ($provide) {
  //     var MockedRecipesList = {
  //
  //     }
  //   });

   })

    beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout, RecipeFactory) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            ctrl = $controller('MainController', {$scope:scope});
            httpBackend = $httpBackend;
            timeout = $timeout
          }))

    describe('Testing existence and default values of scope properties and methods on MainController', function() {
        it('should have scope property ingredients', function() {
          expect(scope.ingredient).toBeDefined();
          expect(scope.ingredient).toBe(null);
        });

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

        it('should have scope property recipesList', function() {
          expect(scope.recipesList).toBeDefined();
          expect(scope.recipesList.length).toBeGreaterThan(0);
        });

        it('should have scope function searchRecipe', function() {
          expect(scope.searchRecipe).toBeDefined();
          //test functionality of this function
          expect(typeof scope.searchRecipe).toBe('function');
        });

        it('should clear the input field', function() {

          scope.ingredient = "random";
          expect(scope.ingredient.length).toBe(6)
          scope.clearSearch();
          expect(scope.ingredient.length).toBe(0);
        })

        it('should clear the filter field', function() {

          scope.textFilter = "random";
          expect(scope.textFilter.length).toBe(6)
          scope.clearFilter();
          expect(scope.textFilter.length).toBe(0);
        })


  })
})
