(function(window, angular, undefined) {'use strict';

    // vytvorime modul
    var ngLoginModule = angular.module('sznLogin', []);

    // pridame mu provider, abychom mohli konfigurovat
    ngLoginModule.provider("login", function LoginProvider(){
        console.log("LoginProvider");

        // vrati objekt usera
        this.getLogin = function(){
            return this.logged;
        };

        // nastavi server
        this.setServer = function(url){
            this.server = url;
        };

        // nastavi zalogovano
        this.setLogin = function(value){
            this.logged = true;
        };

        this.$get = function(){
            this.logged = false;
            return this;
        };
    });

    // direktiva, ktera se bude starat o vypsani formulare, injectujeme
    // login pro ziskani informaci z provideru
    ngLoginModule.directive("sznLogin",["login", function(login){
        return{
            restrict:"E",
            replace:true,
            template:"<div>login {{logged}} {{server}}<br /><button ng-click='setLogin()'>zalogujem</button></div>",
            controller:function($scope, login){
                $scope.setLogin = function(){
                    login.setLogin(true);
                    $scope.logged = login.getLogin();
                };
            },
            link:function(scope){
                scope.server = login.server;
            }
        };
    }]);

})(window, window.angular);