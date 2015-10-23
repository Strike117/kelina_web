'use strict';

describe('Controller: RequestCtrl', function () {

  // load the controller's module
  beforeEach(module('servicekeeperWebApp'));

  var RequestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestCtrl = $controller('RequestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
