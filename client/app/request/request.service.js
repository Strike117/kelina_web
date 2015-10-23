'use strict';

angular.module('servicekeeperWebApp')
  .factory('request', function($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return $resource('api/requests/:id', {
      id: "@_id"
    }, {
      'create': {
        method: 'POST'
      },
      'index': {
        method: 'GET',
        isArray: true
      },
      'show': {
        method: 'GET',
        isArray: false
      },
      'update': {
        method: 'PUT'
      },
      'delete': {
        method: 'DELETE'
      }
    });
  });
