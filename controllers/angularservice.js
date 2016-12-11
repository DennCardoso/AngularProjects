/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('MyService',[]);

myApp.service('AreaService',function(){
    this.square = function(a){
        return a*a;
    };

    this.circle = function(r){
        return 3.14*r*r;
    };

});

myApp.controller('MyController',function($scope,AreaService){
    $scope.result = 0;

    $scope.calculateSquare = function(area){
        $scope.result = AreaService.square(area);
    };

    $scope.calculateCircle = function(raio){
        $scope.result = AreaService.circle(raio);
    }
})