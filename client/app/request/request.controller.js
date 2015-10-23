'use strict';

angular.module('servicekeeperWebApp')
  .controller('RequestCtrl', function($scope, request) {
    $scope.message = 'Hello';
    console.log('asd');
    console.log('index',request.index());
    $scope.requests = request.index();
  });
