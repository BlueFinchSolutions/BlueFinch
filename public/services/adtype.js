angular.module('MyApp')
  .factory('AdType', function($resource) {
    return $resource('/api/adtypes/:_id');
  });