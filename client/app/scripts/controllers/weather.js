'use strict';

angular.module('fooApp')
.controller('WeatherCtrl', function($scope, $http){
   $scope.location = "London";
   $scope.weather = null;
  
  $scope.getWeather = function(){
   $http.get('http://api.worldweatheronline.com/free/v1/weather.ashx?q=' + $scope.location + '&format=json&num_of_days=5&key=td6nvyxejqgcmytufdb3vzem')
   .then(function(result){
     var a = result.data;
     for(var prop in a){
       console.log(prop); 
     }
     console.log(a.data["current_condition"][0]);
     $scope.weather = a.data["current_condition"][0];
   });
  }
});