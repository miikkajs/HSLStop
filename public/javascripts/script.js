var app = angular.module('HSLStop', []);
app.run(function($rootScope) {
 
});

app.controller("FetchController", function($scope, $http){
$scope.fetch = function(){
  $http({method: 'GET', url: '/lines'}).
  success(function(data, status, headers, config) {
 
    $scope.data = JSON.parse(data);
       console.log(JSON.parse(data));
      $scope.data = data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
 }
});
