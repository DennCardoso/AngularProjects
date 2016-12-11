/**
 * Created by denniscardoso on 12/11/16.
 */
function getContact() {
    var mydiv = document.getElementById('mydiv');
    var scope = angular.element(mydiv).scope();
    var contact = scope.contact;
    scope.$apply();
    alert("Read contact" + JSON.stringify(contact));
}

function calculate() {
    var mydiv = document.getElementById('mydiv');
    var scope = angular.element(mydiv).scope();
    var result = scope.calculate(2,3);
    scope.$apply();
    alert("call AngularJS controller function.Result: " + result);
}