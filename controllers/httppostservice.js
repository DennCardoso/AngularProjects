/**
 * Created by denniscardoso on 12/22/16.
 */
var myApp = angular.module('MyDataService',[]);

myApp.service('DataService',function($http) {

    this.postData = function(data, callback){

        $http({
            method: 'POST',
            url: 'jsonfiles/post.json',
            data: data,
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function (resp) {
            callback(resp);
        }).error(function () {
            callback(undefined);
        });
    };
});

myApp.controller('MyController', function($scope, DataService){
   $scope.customer = {};
   $scope.result = {};
   $scope.save = function(){
        DataService.postData($scope.customer, function(data){
            $scope.result = data;
        });
   };
});