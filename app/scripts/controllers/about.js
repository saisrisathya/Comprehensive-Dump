'use strict';

/**
 * @ngdoc function
 * @name comprehensiveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the comprehensiveApp
 */
angular.module('comprehensiveApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
