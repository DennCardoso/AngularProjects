/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('ContactModule',[]);

myApp.controller('ContactController', ['$scope',function($scope){
    $scope.contact = {
        name: "Dennis Cardoso",
        email: "dennis.cardoso@outlook.com",
        phone: "011968653690"
    };

    $scope.calculate = function(a,b) {
        return (a+b)*3;
    }

}]);