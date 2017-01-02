using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using CRUD.Models;

namespace CRUD.Controllers
{
    public class EmployeeContext :DbContext
    {
        public DbSet<Employee> Employees { get; set; }
    }
}