/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('LogService',[]);

myApp.controller('LogController', function($scope, $log){
    $scope.$log = $log;
    $scope.message = 'AngularJS';
});