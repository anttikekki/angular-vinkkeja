angular.module('presentationApp', [
	'ngRoute',
	'hljs',
	'mgcrea.ngStrap',
	'scopeVsController'
	])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'templates/frontpage/frontpage.html'
    })
    .when('/scopeVsController', {
      templateUrl:'templates/scopeVsController/scopeVsController.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});