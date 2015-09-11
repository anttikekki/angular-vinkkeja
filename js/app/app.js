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
    .when('/scopeVsController/1', {
      templateUrl:'templates/scopeVsController/scopeVsController1.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});