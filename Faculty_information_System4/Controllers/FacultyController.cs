using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Faculty_information_System4.Repositories;
using Faculty_information_System4.Models;
namespace Faculty_information_System4.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FacultyController : ControllerBase
    {
        private FacultyRepository FacultyRepository;
        public FacultyController()
        {
            FacultyRepository = new FacultyRepository();
        }

        // Action Method and end Points
        [HttpGet]
        public IActionResult Get()
        {
            return StatusCode(200, FacultyRepository.GetFaculties());
        }
        [HttpGet]
        public IActionResult Get(int id)
        {
            return StatusCode(200, FacultyRepository.GetFaculty(id));
        }
        [HttpPost, Route("AddFaculty")]
        public IActionResult Add(Faculty faculty)
        {
            FacultyRepository.AddFaculty(faculty);
            return StatusCode(200, "Record Added");
        }
        [HttpPut, Route("EditFaculty")]
        public IActionResult Edit(Faculty faculty)
        {
            FacultyRepository.EditFaculty(faculty);
            return StatusCode(200, "Record Edited");
        }
       // [HttpDelete, Route("DeleteFaculty/{id}")]
        //public IActionResult Delete(int id)
        //{
        //    FacultyRepository.Deletefaculty(id);
        //    return StatusCode(200, "Record Deleted");
    //}

    }
}
