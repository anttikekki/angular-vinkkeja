angular.module('scopeVsController').controller('ScopeVsControllerController', function($scope) {
  $scope.scopeTaskStatus = false;
  $scope.controllerTaskStatus = false;

  $scope.$on('ScopeController.fiveClicksOK', function() {
  	$scope.scopeTaskStatus = true;
  });

  $scope.$on('ControllerController.fiveClicksOK', function() {
  	$scope.controllerTaskStatus = true;
  });
});