angular.module('presentationApp', [
	//Libs
	'ngRoute',
	'hljs',
	'mgcrea.ngStrap',

	//Content
	'scopeVsController',
	'scopenPeriytyminen',
	'directiveAsComponent'
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
    .when('/directiveAsComponent', {
      templateUrl:'templates/directiveAsComponent/directiveAsComponent.html'
    })
    .otherwise({
      redirectTo:'/'
    });
});