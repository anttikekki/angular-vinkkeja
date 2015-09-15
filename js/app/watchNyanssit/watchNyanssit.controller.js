angular.module('watchNyanssit')
.controller('WatchParentController1', function($scope, $filter) {
  $scope.tuotteet = [{id: 5}, {id: 34}, {id: 88}];

  $scope.message = null;
  $scope.$watch('tuotteet', function() {
  	$scope.message = 'Äiti huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  });

  $scope.counter = 500;
  $scope.lisaaTuote = function() {
  	$scope.message = null;
  	$scope.tuotteet.push({id: $scope.counter++});
  };
  $scope.tyhjenna = function() {
  	$scope.message = null;
  	$scope.tuotteet.length = 0;
  };
  $scope.muokkaa = function() {
  	if($scope.tuotteet.length > 0) {
  	  var tuote = $scope.tuotteet[$scope.tuotteet.length-1];
  	  tuote.id += 150;
  	}
  };
})
.controller('WatchChildController1', function($scope, $filter) {
  $scope.message = null;
  $scope.$watch('tuotteet', function() {
  	$scope.message = 'Lapsi huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  });

  $scope.counter = 600;
  $scope.lisaaTuote = function() {
  	$scope.message = null;
  	$scope.tuotteet.push({id: $scope.counter++});
  };
  $scope.tyhjenna = function() {
  	$scope.message = null;
  	$scope.tuotteet.length = 0;
  };
  $scope.muokkaa = function() {
  	if($scope.tuotteet.length > 0) {
  	  var tuote = $scope.tuotteet[$scope.tuotteet.length-1];
  	  tuote.id += 150;
  	}
  };
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
.controller('WatchParentController2', function($scope, $filter) {
  $scope.tuotteet = [{id: 5}, {id: 34}, {id: 88}];

  $scope.message = null;
  $scope.$watch('tuotteet', function() {
  	$scope.message = 'Äiti huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  }, true);

  $scope.counter = 500;
  $scope.lisaaTuote = function() {
  	$scope.message = null;
  	$scope.tuotteet.push({id: $scope.counter++});
  };
  $scope.tyhjenna = function() {
  	$scope.message = null;
  	$scope.tuotteet.length = 0;
  };
  $scope.muokkaa = function() {
  	if($scope.tuotteet.length > 0) {
  	  var tuote = $scope.tuotteet[$scope.tuotteet.length-1];
  	  tuote.id += 150;
  	}
  };
})
.controller('WatchChildController2', function($scope, $filter) {
  $scope.message = null;
  $scope.$watch('tuotteet', function() {
  	$scope.message = 'Lapsi huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  }, true);

  $scope.counter = 600;
  $scope.lisaaTuote = function() {
  	$scope.message = null;
  	$scope.tuotteet.push({id: $scope.counter++});
  };
  $scope.tyhjenna = function() {
  	$scope.message = null;
  	$scope.tuotteet.length = 0;
  };
  $scope.muokkaa = function() {
  	if($scope.tuotteet.length > 0) {
  	  var tuote = $scope.tuotteet[$scope.tuotteet.length-1];
  	  tuote.id += 150;
  	}
  };
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
.controller('WatchParentController3', function($scope, $filter) {
  $scope.tuotteet = [{id: 5}, {id: 34}, {id: 88}];

  $scope.message = null;
  $scope.$watchCollection('tuotteet', function() {
  	$scope.message = 'Äiti huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  });

  $scope.counter = 500;
  $scope.lisaaTuote = function() {
  	$scope.message = null;
  	$scope.tuotteet.push({id: $scope.counter++});
  };
  $scope.tyhjenna = function() {
  	$scope.message = null;
  	$scope.tuotteet.length = 0;
  };
  $scope.muokkaa = function() {
  	if($scope.tuotteet.length > 0) {
  	  var tuote = $scope.tuotteet[$scope.tuotteet.length-1];
  	  tuote.id += 150;
  	}
  };
})
.controller('WatchChildController3', function($scope, $filter) {
  $scope.message = null;
  $scope.$watchCollection('tuotteet', function() {
  	$scope.message = 'Lapsi huomasi tuotteiden päivittyneen: ' + $filter('json')($scope.tuotteet);
  });

  $scope.counter = 600;
  $scope.lisaaTuote = function() {
  	$scope.message = null;
  	$scope.tuotteet.push({id: $scope.counter++});
  };
  $scope.tyhjenna = function() {
  	$scope.message = null;
  	$scope.tuotteet.length = 0;
  };
  $scope.muokkaa = function() {
  	if($scope.tuotteet.length > 0) {
  	  var tuote = $scope.tuotteet[$scope.tuotteet.length-1];
  	  tuote.id += 150;
  	}
  };
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