'use strict';

angular.module('fooApp')
  .controller('MainCtrl', function ($scope) {
    $scope.infoText = [
      'This is an experiment, a collaborative application without any requirements',
      'Therefore there is no real purpose of the application, you make it do whatever you want.',
      'Good luck, hope we see eachother in the chatroom'
    ];
  });
