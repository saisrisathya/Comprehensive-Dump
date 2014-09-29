'use strict';

/**
 * @ngdoc overview
 * @name comprehensiveApp
 * @description
 * # comprehensiveApp
 *
 * Main module of the application.
 */
angular
  .module('comprehensiveApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
