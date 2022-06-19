import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/Models/faculty';
import { FacultyService } from 'src/app/Services/faculty.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {
  item:Faculty
  constructor(private facultyService:FacultyService,private router:Router) { 
    this.item=new Faculty();
      }
      ngOnInit(): void {
      }
      Save()
      {
        let sumbitted = false;
        this.facultyService.AddFaculty(this.item).subscribe(data=>
          { 
          sumbitted =true;
           console.log(data);
          })
          if(sumbitted)
          {
            window.location.reload();
          }

      }

      Search(){
        let id = this.item.facultyId;
        this.facultyService.GetFacultyById(id).subscribe(res=>{
          this.item = res;
        })
      }
   
      
      Edit(){
        this.facultyService.EditFaculty(this.item).subscribe(res=>{
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