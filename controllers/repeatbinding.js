/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('RepeatBinding',[]);

myApp.controller('MyController',['$scope',function($scope){
    $scope.customers = {
        {name:'user1',email:'user1@email.com',country:'UK'},
        {name:'user2',email:'user2@email.com',country:'NL'},
        {name:'user3',email:'user3@email.com',country:'DE'},
        {name:'user4',email:'user4@email.com',country:'UK'},
        {name:'user5',email:'user5@email.com',country:'US'},
        {name:'user6',email:'user6@email.com',country:'US'},
        {name:'user7',email:'user7@email.com',country:'CA'}
    }
}]);