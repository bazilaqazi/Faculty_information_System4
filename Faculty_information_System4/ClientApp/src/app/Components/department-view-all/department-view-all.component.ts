import { Component,Inject , OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from 'src/app/Services/department.service';


@Component({
  selector: 'app-department-view-all',
  templateUrl: './department-view-all.component.html',
  styleUrls: ['./department-view-all.component.css']
})
export class DepartmentViewAllComponent  {
  department:Department[];
  //constructor(private departmentService:DepartmentService) {
  //  this.departmentService.GetAllDepartment().subscribe(data=>{
  //    this.department=data;
  //    console.log(this.department);
  //  }) 
  // }

  //ngOnInit(): void {
  //}
 
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Department[]>(baseUrl + 'department').subscribe(result => {
      this.department = result;
    }, error => console.error(error));
  }
}


