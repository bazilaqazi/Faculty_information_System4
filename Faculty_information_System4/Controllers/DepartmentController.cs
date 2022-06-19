using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Faculty_information_System4.Repositories;
using Faculty_information_System4.Models;
namespace Faculty_information_System4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private DepartmentRepository DepartmentRepository;
        public DepartmentController()
        {
            DepartmentRepository = new DepartmentRepository();
        }
        [HttpGet, Route("GetAllDepartment")]
        public IActionResult GetAll()
        {
            return StatusCode(200, DepartmentRepository.GetDepartments());
        }
        [HttpPost, Route("AddDepartment")]
        public IActionResult Add(Department department)
        {
            DepartmentRepository.AddDepartment(department);
            return StatusCode(200, "Record Added");
        }
    }
}
