  var App = angular.module("App");

  App.controller('carSearchController',function($scope,GetAPI){

    $scope.car;
    $scope.message = "Leitaðu Að Bíl Eftir Bílnúmeri";
    $scope.showOrNot = false;




    $scope.search = function(searchText){
      $scope.data = {
        isLoading: true
      };
      GetAPI.getCar(searchText).then(onCarComplete);
    };

    var onCarComplete = function(data){
      if(data.length > 0){
        $scope.car = data;
        $scope.showOrNot = true;
        $scope.message = ""
      }else{
        $scope.showOrNot = false;
        $scope.message = "Ekkert Fannst";
      }
      $scope.data = {
        isLoading: false
      };
    };

  });
