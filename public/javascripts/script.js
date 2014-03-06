var app = angular.module('HSLStop', []);
app.controller("FetchController", ["$scope" , "HSLService", function($scope, HSLService){
    $scope.fetch = function(location){
        $scope.data = [];
        console.log("init");
        HSLService.getStops().then(function(data){

                $scope.data = data.data;

        });
    }
}]);
app.service("HSLService", function($http, $q, $rootScope){
    var service = {};

    service.getStops = function(){
        var deferred = $q.defer();
        navigator.geolocation.getCurrentPosition(function(position){
            $http({method: 'GET', url: '/lines?latitude='+position.coords.latitude+"&longitude="
                + position.coords.longitude}).
                success(function(data, status, headers, config) {
                    var d1 =JSON.parse(data);
                    deferred.resolve({data: JSON.parse(d1)});
                    // update angular's scopes
                    $rootScope.$$phase || $rootScope.$apply();

                }).
                error(function(data, status, headers, config) {
                    deferred.reject();
                    //return {error: data};
                });
        });
        return deferred.promise;

    }
    return service;
});
app.service("LocationService", function($rootScope){
    console.log("rootScope", $rootScope);
    var myService = {};
    myService.getLocation = function()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(myService.showPosition);
        }

    }
    myService.showPosition = function(position)
    {
        myService.location = {latitude: position.coords.latitude, longitude : position.coords.longitude};
    }
    return myService;
});