function FetchCtrl($scope, $http, $templateCache) {
$scope.fetch = function(){
  $http({method: 'GET', url: '/lines'}).
  success(function(data, status, headers, config) {
 
    $scope.data = JSON.parse(data);
       console.log(JSON.parse(data));
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
 }
}

  // $scope.method = 'GET';
  // $scope.url = 'http-hello.html';
 
  // $scope.fetch = function() {
  //   $scope.code = null;
  //   $scope.response = null;
 
  //   $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
  //     success(function(data, status) {
  //       $scope.status = status;
  //       $scope.data = data;
  //     }).
  //     error(function(data, status) {
  //       $scope.data = data || "Request failed";
  //       $scope.status = status;
  //   });
  // };
 
  // $scope.updateModel = function(method, url) {
  //   $scope.method = method;
  //   $scope.url = url;
  // };


