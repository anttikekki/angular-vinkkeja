angular.module('presentationApp', ['ngRoute']).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'pages/frontpage/frontpage.html'
    })
    .when('/scopeVsController/1', {
      templateUrl:'pages/scopeVsController/scopeVsController1.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})