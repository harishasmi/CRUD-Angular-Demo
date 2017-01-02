/// <reference path="angular.js" />
angular.module("mainModule.Controllers")
    .factory("EmployeeService", ["$http","$location", function ($http, $location) {
        var fac = {};
     
        fac.GetEmployeesFromDb = function (){
            return $http.get("/Employee/GetEmployees");
        }

        fac.GetEmployeeById = function (id) {
            // Pass params to Get Request
            // http://stackoverflow.com/questions/18910054/how-to-pass-parameters-to-http-in-angularjs 

            // Pass params to Post Request
            // http://stackoverflow.com/questions/30957248/how-to-send-post-in-angularjs-with-multiple-params

            return $http.get("/Employee/GetEmployeeById", { params : {id : id}});
        }

        fac.AddEmmployee = function (employee) {
            $http.post("/Employee/AddEmployee", employee).then(function (response) {
                alert(response.data.status);
                $location.path("#!/");
            })
        }

        fac.UpdateEmmployee = function (employee) {
            
            $http.post("/Employee/UpdateEmployee", employee).then(function (response) {
                alert(response.data.status);
                $location.path("#!/");

            })
        }

        fac.DeleteEmmployee = function (id) {
            $http.post("/Employee/DeleteEmployee", {id : id}).then(function (response) {
                alert(response.data.status);
                $location.path("#!/");
            })
        }


        return fac;
}])