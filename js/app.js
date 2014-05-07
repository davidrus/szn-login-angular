/**
* TestApp Module
*
* Testovací appka pro přihlášení
*/
var app = angular.module('TestLoginApp', ["sznLogin"]);

// v konfigu pridame loginProviderovi url o kterou se ma oprit
app.config(["loginProvider",function(loginProvider){
    loginProvider.setServer("http://login.szn.dev");
}]);

app.controller('MainCtrl', ['$scope', 'login', function($scope, login){
    $scope.logged = false;
}]);