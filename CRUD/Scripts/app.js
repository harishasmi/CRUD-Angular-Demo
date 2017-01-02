/// <reference path="angular.js" />
var MainApp = angular.module("mainModule", ["mainModule.Controllers", "ngRoute"]);

MainApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/",
            { templateUrl: "/Partials/EmployeeList.html", controller: "MainController" }
         ).
         when("/AddEmployee",
            { templateUrl: "/Partials/AddEmployee.html", controller: "AddEmployeeController" }
         ).
         when("/EditEmployee/:id",
            { templateUrl: "/Partials/EditEmployee.html", controller: "EditEmployeeController" }
         ).
        otherwise({ redirectTo: "/" });
}]);