(function(){
  var App = angular.module("App");

  App.controller('weatherController',function($scope,GetAPI){

    $scope.search = function(){
    GetAPI.getWeather().then(onWeatherComplete);
  };

  var onWeatherComplete = function(data){
    console.log(data);
  }

  });


}());
