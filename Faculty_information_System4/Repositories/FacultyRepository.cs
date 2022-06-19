using System;
using System.Linq;
using System.Collections.Generic;
using Faculty_information_System4.Models;

namespace Faculty_information_System4.Repositories
{
    public class FacultyRepository
    {
        private readonly FIS_DataBaseContext db;
        public FacultyRepository()
        {
            this.db = new FIS_DataBaseContext();
        }
        public void AddFaculty(Faculty faculty) // Add new row details to Faculty Table
        {
            db.Add(faculty);
            db.SaveChanges();
        }
        public List<Faculty> GetFaculties()
        {
            return db.Faculties.ToList();  // return list of the faculties
        }
        public Faculty GetFaculty(int id)   // get faculty details using FacultyId
        {
            Faculty faculty = db.Faculties.Find(id);
            return faculty;
        }
        public void EditFaculty(Faculty faculty)  // edit Row in Faculty table
        {
            db.Faculties.Update(faculty);
            db.SaveChanges();
        }
        public void Deletefaculty(string id)  // Delete Faculty row
        {
            Faculty faculty = db.Faculties.Find(id);
            db.Faculties.Remove(faculty);
            db.SaveChanges();
        }
    }
}

