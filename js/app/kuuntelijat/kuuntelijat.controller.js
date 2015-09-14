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
})
.controller('Sisko1Controller', function($scope, $timeout) {
  $timeout(function() {
    $scope.$broadcast('Haloo sisko siellä alhaalla?', 1);
    $scope.$emit('Haloo sisko siellä ylhäällä?', 1);
  }, 500);
})
.controller('Sisko2Controller', function($scope) {
  $scope.messages = [];
  $scope.$on('Haloo sisko siellä ylhäällä?', function(event, sisko) {
    $scope.messages.push('Kuulen sinua siellä alhaalla, sisko ' + sisko + '. Minä olen sisko 2');
  });
  $scope.$on('Haloo sisko siellä alhaalla?', function(event, sisko) {
    $scope.messages.push('Kuulen sinua siellä ylhäällä, sisko ' + sisko + '. Minä olen sisko 2');
  });
})
.controller('Sisko3Controller', function($rootScope, $timeout) {
  $timeout(function() {
    $rootScope.$broadcast('Haloo sisko siellä alhaalla?', 3);
  }, 500);
})
.controller('AitiController', function($scope, $timeout, $rootScope) {
  $scope.messages = [];
  $scope.lapsi = false;
  
  $scope.$on('Hei äiti, minä täällä!', function(event, lapsi) {
    $scope.messages.push('Lapsi on syntynyt!');
  });

  $scope.teeLapsi = function() {
    $scope.lapsi = true;
    $timeout(function() {
      $rootScope.$broadcast('Lapsi, kuuletko minua?');
    }, 100);
  };
})
.controller('LapsiController', function($scope, LapsiService) {
  $scope.$on('Lapsi, kuuletko minua?', LapsiService.vastaaAidille);
})
.controller('PahaLapsiController', function($rootScope, LapsiService) {
  $rootScope.$on('Lapsi, kuuletko minua?', LapsiService.vastaaAidille);
})
.service('LapsiService', function($rootScope) {
  this.vastaaAidille = function() {
    $rootScope.$broadcast('Hei äiti, minä täällä!');
  }
});