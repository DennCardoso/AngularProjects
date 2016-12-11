/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('SimpleFilter',[]);

myApp.controller('MyController',['$scope',function($scope){
    $scope.customers = [
        {name:'andi',email:'andi@email.com', country:'UK'},
        {name:'brown',email:'brown@email.com', country:'NL'},
        {name:'jane',email:'jane@email.com', country:'DE'},
        {name:'mike',email:'mike@email.com', country:'US'},
        {name:'xemmy',email:'xemmy@email.com', country:'US'},
        {name:'zahra',email:'zahra@email.com', country:'CA'}
    ]
}]);