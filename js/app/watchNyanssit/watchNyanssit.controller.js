angular.module('watchNyanssit')
.controller('WatchParentController', function($scope) {
  $scope.tuotteet = [{id: 5}, {id: 34}, {id: 88}];
  $scope.counter = 500;
  $scope.lisaaTuote = function() {
  	$scope.tuotteet.push({id: $scope.counter++});
  };
})
.controller('WatchChildController1', function($scope, $filter) {
  $scope.message = null;
  $scope.$watch('tuotteet', function() {
  	$scope.message = 'Lapsi huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  });
})
.directive('watchChild1', function() {
  return {
    templateUrl: 'templates/watchNyanssit/watchChild.html',
    controller: 'WatchChildController1',
    scope: {
      tuotteet: '='
    }
  };
})
.controller('WatchChildController2', function($scope, $filter) {
  $scope.message = null;
  $scope.$watch('tuotteet', function() {
  	$scope.message = 'Lapsi huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  }, true);
})
.directive('watchChild2', function() {
  return {
    templateUrl: 'templates/watchNyanssit/watchChild.html',
    controller: 'WatchChildController2',
    scope: {
      tuotteet: '='
    }
  };
})
.controller('WatchChildController3', function($scope, $filter) {
  $scope.message = null;
  $scope.$watchCollection('tuotteet', function() {
  	$scope.message = 'Lapsi huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  });
})
.directive('watchChild3', function() {
  return {
    templateUrl: 'templates/watchNyanssit/watchChild.html',
    controller: 'WatchChildController3',
    scope: {
      tuotteet: '='
    }
  };
});