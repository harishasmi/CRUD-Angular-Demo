using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUD.Models;
using System.Data.Entity;

namespace CRUD.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        private EmployeeContext contx = null;
        public EmployeeController()
        {
            contx = new EmployeeContext();
        }



        public ActionResult GetEmployees()
        {
            List<Employee> employees = contx.Employees.ToList();
            return Json(new { employeeList = employees}, JsonRequestBehavior.AllowGet);
        }


        public ActionResult GetEmployeeById(int id)
        {
            Employee emp = contx.Employees.Where(e => e.Id == id).SingleOrDefault();
            return Json(new { employeeReturned = emp }, JsonRequestBehavior.AllowGet);
        }


        public ActionResult AddEmployee(Employee emp)
        {
            contx.Employees.Add(emp);
            contx.SaveChanges();
            return Json(new { status = "Employee Added Succesfully" });
        }


        public ActionResult UpdateEmployee(Employee emp)
        {
            // More Info on the various methods to update data 
            // http://stackoverflow.com/questions/15336248/entity-framework-5-updating-a-record
 
            contx.Entry(emp).State = EntityState.Modified;
            contx.SaveChanges();
            return Json(new { status = "Employee Modified Succesfully" });

        }

        public ActionResult DeleteEmployee(int id)
        {
 
            var emp = contx.Employees.Where(e => e.Id == id).SingleOrDefault();
            contx.Employees.Remove(emp);
            contx.SaveChanges();
            return Json(new { status = "Employee Deleted Succesfully" });
        }
    }
}