import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/Models/faculty';

import { FacultyService } from 'src/app/Services/faculty.service';


@Component({
  selector: 'app-faculty-homepage',
  templateUrl: './faculty-homepage.component.html',
  styleUrls: ['./faculty-homepage.component.css']
})
export class FacultyHomepageComponent implements OnInit {

 
  items:Faculty
  public addUserForm !: FormGroup;
  constructor( private router:Router, private formBuilder: FormBuilder, 
    private http: HttpClient, private facultyService:FacultyService    
    )
     { 
   
    this.items=new Faculty();
  }

  ngOnInit(): void {
    this.addUserForm= this.formBuilder.group({
      userId:["", Validators.required],
      userName:["", Validators.required],
      password:["", Validators.required]
    })
  }
  Save()
  {
    this.facultyService.AddFaculty(this.items).subscribe(data=>
      {
       console.log(data);
       this.router.navigateByUrl('faculty-view-all');
      })

  }
  Edit(){
    this.facultyService.EditFaculty(this.items).subscribe(res=>{
      console.log(res);
    })
  }
  Delete(id:string)
{
this.facultyService.DeleteFaculty(id).subscribe(data=>{
  console.log(data);
})
}

 
  }


