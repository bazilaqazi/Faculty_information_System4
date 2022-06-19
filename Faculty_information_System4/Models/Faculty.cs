using System;
using System.Collections.Generic;

#nullable disable

namespace Faculty_information_System4.Models
{
    public partial class Faculty
    {
        public int FacultyId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNo { get; set; }
        public int? Pincode { get; set; }
        public string EmailAddress { get; set; }
        public string DeptId { get; set; }

        public virtual Department Dept { get; set; }
    }
}
