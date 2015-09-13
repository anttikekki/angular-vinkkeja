angular.module('kuuntelijat')
.service('AuthorizationService', function($q, $timeout) {
  this.isAdminUser = function() {
    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve(true);
    }, 500);

    return deferred.promise;
  };
})
.controller('BroadcastController', function($scope, AuthorizationService) {
  AuthorizationService.isAdminUser().then(function(isAdminUser) {
    $scope.$broadcast('isAdminUser', isAdminUser);
    $scope.broadcastLog = 'isAdminUser tapahtuma lähti ' + new Date().toISOString();
  });

})
.controller('ListenerController', function($scope) {
  $scope.startupLog = 'ListenerController käynnistettiin ' + new Date().toISOString();
  $scope.$on('isAdminUser', function(event, isAdminUser) {
    $scope.message = isAdminUser ? 'Moi admin' : 'Moi tavis';
  });
});