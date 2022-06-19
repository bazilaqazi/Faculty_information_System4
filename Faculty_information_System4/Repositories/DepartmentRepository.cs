using System;
using System.Linq;
using System.Collections.Generic;
using Faculty_information_System4.Models;

namespace Faculty_information_System4.Repositories
{
    public class DepartmentRepository
    {
        private readonly FIS_DataBaseContext db;
        public DepartmentRepository()
        {
            this.db = new FIS_DataBaseContext();
        }
        public void AddDepartment(Department department) // Add new row details to Faculty Table
        {
            db.Add(department);
            db.SaveChanges();
        }
        public List<Department> GetDepartments()
        {
            return db.Departments.ToList();  // return list of the faculties
        }
        public Department GetDepartment(string id)   // get faculty details using FacultyId
        {
            Department department = db.Departments.Find(id);
            return department;
        }

    }
}


