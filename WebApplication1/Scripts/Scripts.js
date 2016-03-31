/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees = [
                            { firstName: "Bob", lastName: "Smith", birthday: new Date("June 20, 1934"), BMI: 20, up: 0, down: 0 },
                            { firstName: "Carl", lastName: "Tanner", birthday: new Date("April 20, 1946"), BMI: 17, up: 0, down: 0 },
                            { firstName: "Dean", lastName: "Baker", birthday: new Date("December 17, 1982"), BMI: 35, up: 0, down: 0 },
                            { firstName: "Grant", lastName: "Fletcher", birthday: new Date("September 17, 1992"), BMI: 27, up: 0, down: 0 },
                            {
                                firstName: "Hughe", lastName: "Mason", birthday: new Date("January 17, 2001"), BMI: 25, up: 0, down: 0,
                                children: [
                                    { name: "Bobby" },
                                    { name: "Sally" }
                                ]
                            }

                    ];

                    $scope.employees = employees;
                    $scope.employeesCount = employees.length;

                    $scope.tickUp = function (employee) {
                        employee.up++;
                    };

                    $scope.tickDown = function (employee) {
                        employee.down--;
                    };

                    // Default input values
                    $scope.rowLimit = 5;
                    $scope.sortColumn = "firstName";

                    //
                    // Video 10 click sort implementation
                    $scope.reverseSort = false;

                    // Set sort column
                    $scope.sortData = function (column) {
                        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false; // if same column reverse, else set to false
                        $scope.sortColumn = column; // set sortColumn to column
                    }

                    // Set up and down arrow based on current sort feature
                    $scope.getSortClass = function (column) {
                        if ($scope.sortColumn == column) {
                            return $scope.reverseSort ? "arrow-down" : "arrow-up";
                        };
                    };

                    // Video 15 ng-init
                    $scope.hideKids = true;

                    // Video 16 ng-include html component
                    $scope.employeeView = "EmployeeView.html"
                });
