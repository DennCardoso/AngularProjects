/**
 * Created by denniscardoso on 12/11/16.
 */
var myApp = angular.module('NestedRepeat-binding',[]);

myApp.controller('MyController',['$scope',function($scope){
    $scope.orders = [
        {
            id:1,
            transid:'123456',
            customer: 'user1',
            created: '3/1/2014',
            details: [
                {name:'product1',quantity:'2',price:2.5},
                {name:'product2',quantity:'1',price:1.4},
                {name:'product3',quantity:'3',price:3.5},
                {name:'product4',quantity:'5',price:2.8}
            ]
        },
        {
            id:2,
            transid:'123457',
            customer: 'user2',
            created: '3/8/2014',
            details: [
                {name:'product1',quantity:'1',price:2.5},
                {name:'product2',quantity:'1',price:1.4},
                {name:'product4',quantity:'2',price:2.8}
            ]
        },
        {
            id:3,
            transid:'123458',
            customer: 'user1',
            created: '3/15/2014',
            details: [
                {name:'product1',quantity:'4',price:2.5},
                {name:'product2',quantity:'3',price:1.4},
                {name:'product3',quantity:'2',price:3.5},
                {name:'product4',quantity:'1',price:2.8}
            ]
        },
        {
            id:4,
            transid:'123459',
            customer: 'user2',
            created: '3/23/2014',
            details: [
                {name:'product1',quantity:'1',price:2.5},
                {name:'product2',quantity:'1',price:1.4}
            ]
        }
    ]
}]);