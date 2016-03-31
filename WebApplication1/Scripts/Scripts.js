/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employee = {
                        firstName: "James",
                        lastName: "Smith"
                    };

                    $scope.employee = employee
                });
