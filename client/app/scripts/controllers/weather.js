'use strict';

angular.module('fooApp')
.controller('WeatherCtrl', function($scope, $http){
   $scope.location = "London";
   $scope.weather = null;
  
  $scope.getWeather = function(){
   $http.get('http://api.worldweatheronline.com/free/v1/weather.ashx?q=Malm%C3%B6&format=json&num_of_days=5&key=td6nvyxejqgcmytufdb3vzem')
   .then(function(result){
     console.log(result.data);
     var a = result.data.weather;
     console.log(a);
     $scope.weather = result.data;
   });
  }
});