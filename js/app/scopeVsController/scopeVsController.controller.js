angular.module('scopeVsController')
.controller('ScopeVsControllerController', function($scope) {
  $scope.scopeTaskStatus = false;
  $scope.controllerTaskStatus = false;

  $scope.$on('ScopeController.fiveClicksOK', function() {
  	$scope.scopeTaskStatus = true;
  });

  $scope.$on('ControllerController.fiveClicksOK', function() {
  	$scope.controllerTaskStatus = true;
  });
})
.controller('ControllerController', function($scope) {
  var controller = this;
  controller.clickCount = 0;
  controller.message  = '';

  controller.addClick = function() {
  	controller.clickCount++;
  };

  $scope.$watch(function() { return controller.clickCount; }, function(newValue) {
  	controller.message = newValue < 5 ? 'Alle viisi klikkausta' : 'Viisi tai enemmän klikkausta';
  	if(newValue >= 5) {
  		$scope.$emit('ControllerController.fiveClicksOK');
  	}
  });

})
.controller('ScopeController', function($scope) {
  $scope.clickCount = 0;
  $scope.message  = '';

  $scope.addClick = function() {
  	$scope.clickCount++;
  };

  $scope.$watch('clickCount', function(newValue) {
  	$scope.message = newValue < 5 ? 'Alle viisi klikkausta' : 'Viisi tai enemmän klikkausta';
  	if(newValue >= 5) {
  		$scope.$emit('ScopeController.fiveClicksOK');
  	}
  });
})
.controller('SiistiScopeController', function($scope, usersService, ordersService) {
  var controller = this;
  controller.ordersForUserIdMap = {};

  $scope.users = [];

  controller.init = function() {
  	usersService.loadUsers().then(function(users) {
      $scope.users = users;
    });

    ordersService.loadOrders().then(function(orders) {
  	  controller.createUserOrdersMap(orders);
    });
  };

  controller.createUserOrdersMap = function(orders) {
    orders.forEach(function(order) {
      if(controller.ordersForUserIdMap[order.userId]) {
        controller.ordersForUserIdMap[order.userId].push(order);
      }
      else {
        controller.ordersForUserIdMap[order.userId] = [order];
      }
    });
  };

  $scope.getUserOrderCount = function(userId) {
    return controller.ordersForUserIdMap[userId] ? controller.ordersForUserIdMap[userId].length : 0;
  };

  controller.init();
})
.service('usersService', function($q, $timeout) {
	this.loadUsers = function() {
		var deferred = $q.defer();

	    $timeout(function() {
	      deferred.resolve([
	        {id:1, name: 'Matti'}, 
	        {id:2, name: 'Maija'}, 
	        {id:3, name: 'Mikko'}]);
	    }, 300);

	    return deferred.promise;
	};
})
.service('ordersService', function($q, $timeout) {
	this.loadOrders = function() {
		var deferred = $q.defer();

	    $timeout(function() {
	      deferred.resolve([
	        {id:100, userId: 1}, 
	        {id:101, userId: 1}, 
	        {id:102, userId: 1}, 
	        {id:103, userId: 2}, 
	        {id:104, userId: 2}]);
	    }, 300);

	    return deferred.promise;
	};
});