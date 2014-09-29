'use strict';

/**
 * @ngdoc function
 * @name comprehensiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comprehensiveApp
 */
angular.module('comprehensiveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
