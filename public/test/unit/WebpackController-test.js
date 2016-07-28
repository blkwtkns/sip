describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))


  describe('Testing AngularJS Controller WebpackController', function () {
  var scope, ctrl, httpBackend, timeout, rootScope;

	beforeEach(function () {
		module(function ($provide) {

			var strVar = "";
			strVar += "var Webpack = require('Webpack');";
			strVar += "var imageMin = require('Webpack-imagemin');";
			strVar += "Webpack.task('imageMin', function() {";
			strVar += "Webpack.src('.\/assets\/img\/*')";
			strVar += "pipe(imageMin())";
			strVar += ".pipe(Webpack.dest('.\/public\/img'));";
			strVar += "});";
			strVar = strVar.split(';');

			var recipesList = [];

			var MockedWebpackFactory = {

        imgMinRecipe: strVar,
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
        },
        getDownload: function(){
          return $http.get('/download');
        }

			};

			$provide.value('WebpackFactory', MockedWebpackFactory)
		});
	});

   })

	  beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout, WebpackFactory) {
            httpBackend = $httpBackend;
            httpBackend.expectGET('/webpack-tasks').respond({
              "0":"bower.js",
              "1":"connect.js"
            })
	          rootScope = $rootScope;
	          scope = $rootScope.$new();
	          ctrl = $controller('WebpackController', {$scope:scope});
	          timeout = $timeout
            httpBackend.flush()

	        }))

    describe('Testing existence and default values of scope properties and methods on WebpackController', function() {
        it('should have scope property header', function() {
          expect(scope.header).toBeDefined();
          expect(scope.header).toBe('Webpack Sip Recipes');
        });


			})





})
