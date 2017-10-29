/*global angular, firebase*/

(function () {
    "use strict";

    var app = angular.module("myApp", ["storeProducts", "ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {
        //$location.html5Mode(true);
        $routeProvider.when("/", {
            templateUrl: "templates/main.html"
        }).when("/page1", {
            templateUrl: "templates/page1.html"
        }).when("/page2", {
            templateUrl: "templates/page2.html",
            controller: function () {}
        });
    });

    function myController($scope, $http) {
        $scope.Initialized = function () {
            $http.get("gems.json").then($scope.gemDataReceived);
        };

        $scope.gemDataReceived = function (result) {
            $scope.models = result.data;
        };
    }

    app.controller("myController", ['$scope', '$http', myController]);

    app.controller("userController", function ($scope) {
        $scope.register = function () {
            firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password);
        };

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                window.console.log("you are logged in");
            } else {
                window.console.log("you are logged in");
            }
        });
    });

}());

