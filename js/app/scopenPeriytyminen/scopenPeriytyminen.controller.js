angular.module('scopenPeriytyminen')
.controller('ScopenPeriytyminenController', function($scope) {
  $scope.doItMessage = '';
  $scope.$on('doItMessage', function(event, doItMessage) {
  	$scope.doItMessage = doItMessage;
  });
})
.controller('MuuttujatParentDemoController', function($scope) {
  $scope.name = '';
  $scope.user = {
  	name: ''
  };
})
.controller('MuuttujatChildDemoController', function($scope) {
  
})
.controller('FunctiotParentDemoController', function($scope) {
  $scope.doIt = function() {
  	$scope.$emit('doItMessage', 'parent $scope.doIt()');
  };
})
.controller('FunctiotChildDemoController', function($scope) {
  $scope.action = function() {
  	$scope.$emit('doItMessage', 'child $scope.action()');
  };

  this.doIt = function() {
  	$scope.$emit('doItMessage', 'child this.doIt()');
  };

  var doIt = function() {
  	$scope.$emit('doItMessage', 'child var doIt()');
  };

  function doIt() {
  	$scope.$emit('doItMessage', 'child function doIt()');
  }
})
.controller('NgIfNgRepeatDemoController', function($scope) {
  $scope.name = '';
});