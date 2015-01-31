'use strict';

/**
 * @ngdoc function
 * @name angularWorkoutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWorkoutApp
 */
angular.module('angularWorkoutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
