angular.module('presentationApp', [
	//Libs
	'ngRoute',
	'hljs',
	'mgcrea.ngStrap',

	//Content
	'scopeVsController',
	'scopenPeriytyminen'
	])
.config(function($routeProvider) {
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
    .otherwise({
      redirectTo:'/'
    });
});