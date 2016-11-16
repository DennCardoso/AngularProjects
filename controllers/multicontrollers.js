var myApp = angular.module("MultiController",[]);

myApp.controller('Math1',['$scope',function($scope){
  $scope.result = 0;

  $scope.add = function(a,b) {
      $scope.result = a + b;
  }

}]);

myApp.controller('Math2',['$scope',function($scope){
  $scope.result = 0;

  $scope.multiple = function() {
      $scope.result = 2 * 3;
  }
}]);

myApp.controller('Math3',['$scope',function($scope){
  $scope.result = 0;

  $scope.exponential = function(a,b) {
      $scope.result = math.pow(a, b);
  }
}]);
