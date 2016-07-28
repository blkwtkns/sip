describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))

  describe('Testing AngularJS Factory WebpackFactory', function () {
  var scope, httpBackend, timeout, rootScope, WebpackFactory;


    beforeEach(inject(function($rootScope, $httpBackend, $timeout, $injector) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            timeout = $timeout;
            WebpackFactory = $injector.get('WebpackFactory');
          }))


    describe('Testing the existence of properties and methods', function () {

      it('should return an object that has these properties defined', function () {;
        expect(WebpackFactory.recipesList).toBeDefined();
        expect(WebpackFactory.getRecipesList).toBeDefined();
        expect(WebpackFactory.getRecipe).toBeDefined();
      })
    })

    describe('Testing that the getRecipesList function gets called', function () {

      it('should call the getRecipesList functions', function (){
      httpBackend.expectGET('/webpack-tasks').respond({
        "0":"bower.js",
        "1":"connect.js"
      })

      var returnFromFunc;
      WebpackFactory.getRecipesList().then(function(data){returnFromFunc = data.data});
      timeout.flush()
      httpBackend.flush();

      expect(returnFromFunc[0]).toBe('bower.js')

      });
    });



  describe('Testing saveRecipesList', function () {
    //bad test, please update this and add a $broadcast
    //when the underlying function is called
    it('should call the function saveRecipesList', function () {
      spyOn(WebpackFactory, 'saveRecipesList')
      WebpackFactory.saveRecipesList()
      expect(WebpackFactory.saveRecipesList).toHaveBeenCalled();
    })
  })




  });


});
