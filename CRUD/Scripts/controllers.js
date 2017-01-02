/// <reference path="angular.js" />
var MainAppControllers = angular.module("mainModule.Controllers", [])

MainAppControllers.
    controller("MainController", ["$scope", "EmployeeService","$window", function ($scope, EmployeeService, $window) {
        
        EmployeeService.GetEmployeesFromDb().then(function (response) {
            $scope.listOfEmployees = response.data.employeeList;
        })
        $scope.DeleteEmployee = function (id, index) {
            EmployeeService.DeleteEmmployee(id);
            //$scope.listOfEmployees.splice(index, 1);
            //console.log($window.location.href);
            //$window.location.href = "#";
        }
    }]).
    controller("AddEmployeeController", ["$scope", "EmployeeService", function ($scope, EmployeeService) {
        $scope.message = "From the Add Employee Controller";

        $scope.AddEmployee = function () {
            //console.log(EmployeeService);
            EmployeeService.AddEmmployee($scope.employee);
            
        }
    }]).
    controller("EditEmployeeController", ["$scope", "EmployeeService", "$routeParams", function ($scope, EmployeeService, $routeParams) {
        $scope.message = "From the Edit Employee Controller";

        var id = $routeParams.id;
        EmployeeService.GetEmployeeById(id).then(function (response) {
            $scope.employee = response.data.employeeReturned;
        })

        $scope.UpdateEmployee = function () {
            console.log($scope.employee);
            EmployeeService.UpdateEmmployee($scope.employee);
        }


    }]);
    
