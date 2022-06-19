import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/department';
import { DepartmentService } from 'src/app/Services/department.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  item:Department
  constructor(private departmentService:DepartmentService,private router:Router) { 
    this.item=new Department();
      }
      ngOnInit(): void {
      }
      Save()
      {
        this.departmentService.AddDepartment(this.item).subscribe(data=>
          {
           console.log(data);
           this.router.navigateByUrl('department-view-all');
          })
    
      }
    
    }
