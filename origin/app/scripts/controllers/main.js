'use strict';

/**
 * @ngdoc function
 * @name comprehensiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comprehensiveApp
 */
angular.module('comprehensiveApp')
  .controller('MainCtrl', function ($scope, $http) {
    /*$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

    $http.get('data/dump.json').
    success(function(data, status, headers, config) {
      $scope.questions = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  });
