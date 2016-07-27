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

			$provide.value('RecipeFactory', MockedRecipeFactory)
		});
	});

   })

	  beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout, RecipeFactory) {
            httpBackend = $httpBackend;
            httpBackend.expectGET('/gulp-tasks').respond({
              "0":"bower.js",
              "1":"connect.js"
            })
	          rootScope = $rootScope;
	          scope = $rootScope.$new();
	          ctrl = $controller('RecipesController', {$scope:scope});
	          timeout = $timeout
            httpBackend.flush()

	        }))

    describe('Testing existence and default values of scope properties and methods on RecipesController', function() {
        it('should have scope property header', function() {
          expect(scope.header).toBeDefined();
          expect(scope.header).toBe('List of Recipes');
        });

        it('should have scope property singleRecipe', function() {
          expect(scope.singleRecipe).toBeDefined();
					// httpBackend.flush();
          expect(scope.singleRecipe[0]).toBe("var gulp = require('gulp')");
        });
			})

		describe('Testing recipesList and recipes',function(){
        it('should populate respective scope properties', function() {
					expect(JSON.stringify(scope.recipesList)).toBe(JSON.stringify({
            "0":"bower.js",
            "1":"connect.js"
          }));


				    expect(scope.singleRecipe[0]).toBe("var gulp = require('gulp')")
        });



  })
})
