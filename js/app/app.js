angular.module('presentationApp', [
	//Libs
	'ngRoute',
	'hljs',
	'mgcrea.ngStrap',

	//Content
	'scopeVsController',
	'scopenPeriytyminen',
	'directiveAsComponent',
	'kuuntelijat',
	'watchNyanssit',
	'promiset',
	'suorituskyky'
	])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'templates/frontpage/frontpage.html'
    })
    .when('/scopeVsController', {
      templateUrl:'templates/scopeVsController/scopeVsController.html'
    })
    .when('/scopenPeriytyminen', {
      templateUrl:'templates/scopenPeriytyminen/scopenPeriytyminen.html'
    })
    .when('/directiveAsComponent', {
      templateUrl:'templates/directiveAsComponent/directiveAsComponent.html'
    })
    .when('/kuuntelijat', {
      templateUrl:'templates/kuuntelijat/kuuntelijat.html'
    })
    .when('/watchNyanssit', {
      templateUrl:'templates/watchNyanssit/watchNyanssit.html'
    })
    .when('/promiset', {
      templateUrl:'templates/promiset/promiset.html'
    })
    .when('/suorituskyky', {
      templateUrl:'templates/suorituskyky/suorituskyky.html'
    })
    .otherwise({
      redirectTo:'/'
    });

    $httpProvider.interceptors.push(function($q, $timeout) {
	  return {
	    response: function(response) {
	      if(response.config.url.indexOf('listener.html') !== -1) {
	      	var deferred = $q.defer();

		    $timeout(function() {
		      deferred.resolve(response);
		    }, 1500);

		    return deferred.promise;
	      }
	      return response;
	    }
	  };
	});
});