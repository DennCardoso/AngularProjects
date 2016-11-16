/**
 * Created by denniscardoso on 10/22/16.
 */
var myApp = angular.module('helloWorld',[]);

myApp.controller('sayHello',function($scope){
    $scope.name = { text: "Your Name"};
});