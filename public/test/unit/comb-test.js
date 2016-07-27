describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))
  it('should have tests', function (){
    expect(true).toBe(true);
  });

  describe('Testing AngularJS Controller', function () {
  var scope, ctrl, httpBackend, timeout, rootScope;
  beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout) {
          rootScope = $rootScope;
          scope = $rootScope.$new();
          ctrl = $controller('MainController', {$scope:scope});
          httpBackend = $httpBackend;
          timeout = $timeout
        }))
  it('should have filteroptions in the scope', function() {
    expect(scope.filterOptions).toBeDefined();
    expect(scope.filterOptions).toBe(false);
  });


  })
})
