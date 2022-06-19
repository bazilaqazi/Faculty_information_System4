using System;
using System.Collections.Generic;

#nullable disable

namespace Faculty_information_System4.Models
{
    public partial class Department
    {
        public Department()
        {
            Faculties = new HashSet<Faculty>();
        }

        public string DeptId { get; set; }
        public string DeptName { get; set; }

        public virtual ICollection<Faculty> Faculties { get; set; }
    }
}
