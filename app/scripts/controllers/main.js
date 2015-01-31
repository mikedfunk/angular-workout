'use strict';

/**
 * @ngdoc function
 * @name angularWorkoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWorkoutApp
 */
angular.module('angularWorkoutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
