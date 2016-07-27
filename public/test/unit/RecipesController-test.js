describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))
  it('should have tests', function (){
    expect(true).toBe(true);
  });

  describe('Testing AngularJS Controller RecipesController', function () {
  var scope, ctrl, httpBackend, timeout, rootScope;

	beforeEach(function () {
		module(function ($provide) {

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

			var MockedRecipeFactory = {



						imgMinRecipe: strVar,
						recipesList: recipesList,
						getRecipesList: function() {
							return httpBackend.expectGET('/gulp-tasks');
						},
						saveRecipesList: function(recipesList) {
							recipesList = recipesList;
						},
						getRecipe: function(ingredient) {
							const data = {
								ingredient: ingredient
							};
							return httpBackend.expectPOST('/gulp-tasks', data);
						},
						test: function() {
							console.log(recipesList);
						}






			};

			$provide.value('RecipeFactory', MockedRecipeFactory)
		});
	});

   })

	  beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout, RecipeFactory) {
	          rootScope = $rootScope;
	          scope = $rootScope.$new();
	          ctrl = $controller('RecipesController', {$scope:scope});
	          httpBackend = $httpBackend;
	          timeout = $timeout
	        }))

    describe('Testing existence and default values of scope properties and methods on RecipesController', function() {
        it('should have scope property header', function() {
          expect(scope.header).toBeDefined();
          expect(scope.header).toBe('List of Recipes');
        });

        it('should have scope property singleRecipe', function() {
          expect(scope.singleRecipe).toBeDefined();
					httpBackend.flush();
          expect(scope.singleRecipe[0]).toBe("var gulp = require('gulp')");
        });
			})

		describe('Testing recipesList and recipes',function(){
        it('should populate respective scope properties', function() {
					expect(scope.recipesList).toBe(null);

					httpBackend.flush();
					expect(scope.recipesList).toBeGreaterThan(0)
        });



  })
})
