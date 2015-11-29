  var App = angular.module("App");

  App.controller('companySearchController',function($scope,GetAPI,$state){

    $scope.data = {
      isLoading: true
    };

    var stuff = [];
    $scope.groups = [];
    var connection = $.hubConnection('http://for3s.azurewebsites.net');
    var Hub = connection.createHubProxy('company');
    connection.start({jsonp:true}).done(function(){
      $scope.data = {isLoading:false};
      $scope.$apply();
    });
    $scope.canOrNot = false;
    var runningQuery = true;

    $scope.message = "Fyrirtækja Leit";


    $scope.search = function(searchText){
      $scope.data = {
        isLoading: true
      };
        Hub.invoke('findName',searchText).done(function(data){
          $.when( { testing: data } ).done(function( x ) {
            stuff = JSON.parse(x.testing);
            $scope.groups = stuff;

            $scope.data = {
              isLoading: false
            };
            $scope.$apply();
          });
        });
      };

    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };

  });
