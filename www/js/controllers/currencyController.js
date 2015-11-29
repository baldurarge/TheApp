  var App = angular.module("App");

  App.controller('currencyController',function($scope,GetAPI){

    $scope.data = {
      isLoading: true
    };



    $scope.search = function(){
      GetAPI.getCurrency().then(onCarComplete);
    };

    var onCurrencyComplete = function(data){

      $scope.currencyData = data;
      starter(1000);
      $scope.data = {
        isLoading: false
      };

    };

    var starter = function (price) {
      for(var i = 0; i<$scope.currencyData.length;i++){
        $scope.currencyData[i]['forApp'] = parseFloat(price/$scope.currencyData[i]['askValue']).toFixed(2);
        $scope.currencyData[i]['forAppReal'] = price/$scope.currencyData[i]['askValue'];
      }
    };



    $scope.changeCurrency = function(changed){
      var isk = changed['forApp']*changed['askValue'];
      console.log(isk);

      //console.log(changed['shortName'] + " " + changed['forApp']+ " is: "+ isk);

      calculate(isk);

      changed['forApp'] = parseFloat(changed['forApp']).toFixed(0);
    };


    var calculate = function(isk){
      for(var i = 0; i<$scope.currencyData.length;i++) {
        var stuff = isk/$scope.currencyData[i]['askValue'];
        stuff = parseFloat(stuff).toFixed(2);
        $scope.currencyData[i]['forApp'] = (stuff);

      }
    };

    $scope.clicked = function(item){
      item['forApp'] = parseInt(item['forApp']).toFixed(0);
    };

    GetAPI.getCurrency().then(onCurrencyComplete);

  });
