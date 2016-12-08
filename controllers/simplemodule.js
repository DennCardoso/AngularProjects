/**
 * Created by denniscardoso on 12/7/16.
 */
var myApp = angular.module('SimpleModule',[]);

myApp.controller('MyController',['$scope',function($scope){

    $scope.title = 'Simple Module';
    $scope.result = 0;

    $scope.add = function(a,b){
        $scope.result = a+b;
    };
    $scope.multiple = function(a,b){
        $scope.result = a*b;
    };

}]);