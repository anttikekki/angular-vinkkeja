angular.module('scopeVsController').controller('ScopeController', function($scope) {
  $scope.clickCount = 0;
  $scope.message  = '';

  $scope.addClick = function() {
  	$scope.clickCount++;
  };

  $scope.$watch('clickCount', function(newValue) {
  	$scope.message = newValue < 5 ? 'Alle viisi klikkausta' : 'Viisi tai enemmän klikkausta';
  });
});