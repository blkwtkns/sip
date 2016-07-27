describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))

  describe('Testing AngularJS Factory RecipeFactory', function () {
  var scope, httpBackend, timeout, rootScope, RecipeFactory;


    beforeEach(inject(function($rootScope, $httpBackend, $timeout, $injector) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            timeout = $timeout;
            RecipeFactory = $injector.get('RecipeFactory');
          }))


    describe('Testing the existence of properties and methods', function () {

      it('should return an object that has these properties defined', function () {
        expect(RecipeFactory.imgMinRecipe).toBeDefined();
        expect(RecipeFactory.recipesList).toBeDefined();
        expect(RecipeFactory.getRecipesList).toBeDefined();
        expect(RecipeFactory.getRecipe).toBeDefined();
      })
    })

    describe('Testing that the function gets called', function () {

      it('should call the functions', function(){
      httpBackend.expectGET('/gulp-tasks').respond({
        "0":"bower.js",
        "1":"connect.js"
      })
      var returnFromFunc;
      RecipeFactory.getRecipesList().then(function(data){returnFromFunc = data.data});
      timeout.flush()
      httpBackend.flush();

      expect(returnFromFunc[0]).toBe('bower.js')


    });
  });
  });
});
