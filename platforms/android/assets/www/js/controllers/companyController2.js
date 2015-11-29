angular.module('App', [])
  .controller('companySearchController2', function ($scope) {

    $("p").click(function(){
      alert("The paragraph was clicked.");
    });

    $scope.initSlider();
  });
