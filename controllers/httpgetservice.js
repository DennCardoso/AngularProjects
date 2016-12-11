/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('MyDataService',[]);

myApp.service('DataService', function($http){
    this.getData = function(callback){

        //method1
        $http.get('localhost:63342/AngularProjects/jsonfiles/sample.json').success(callback).error(function(callback){
            alert("No data");
            callback(undefined);
        });

        //method2
        $http({
            method: 'GET',
            url: 'localhost:63342/AngularProjects/jsonfiles/sample.json',
            headers: {
                'Content-type':'application/json'
            }
        }).success(function(data){
            callback(data);
        }).error(function(){
            callback(undefined);
        });

    };
});

myApp.controller('MyController', function($scope, DataService){
   $scope.users = null;
   $scope.getAllUsers = function() {
       DataService.getData(function(data){
           $scope.users = data;
       })
   }
});