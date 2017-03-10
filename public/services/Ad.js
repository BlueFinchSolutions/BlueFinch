angular.module('MyApp')
  .factory('Ad', function($resource) {
    return $resource('/api/ads/:_id');
  });