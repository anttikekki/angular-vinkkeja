angular.module('scopeVsController').controller('ControllerController', function($scope) {
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

});