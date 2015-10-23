'use strict';

angular.module('servicekeeperWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('request', {
        url: '/request',
        templateUrl: 'app/request/request.html',
        controller: 'RequestCtrl'
      });
  });