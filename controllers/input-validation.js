/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('InputValidation',[]);

myApp.controller('MyController',['$scope', function($scope){

    $scope.submitForm = function(isValid){
        if (isValid){
            alert('Data was Saved');
        }
    }
}]);