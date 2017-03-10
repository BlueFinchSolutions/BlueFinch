angular.module('MyApp')
  .controller('AddCtrl', function($scope, $alert, Show, Ad) {
    $scope.addShow = function() {
      Show.save({ showName: $scope.showName }).$promise
        .then(function() {
          $scope.showName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'TV show has been added.',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $scope.showName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

    $scope.addAd = function() {
      Ad.save({ title: $scope.title, overview: $scope.overview }).$promise
        .then(function() {
          $scope.title = '';
          $scope.overview = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'Ad has been posted.',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $scope.title = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };

  });