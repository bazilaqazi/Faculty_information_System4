import { Component,Inject , OnInit } from '@angular/core';
import { Faculty } from 'src/app/Models/faculty';
import { HttpClient } from '@angular/common/http';
import { FacultyService } from 'src/app/Services/faculty.service';
@Component({
  selector: 'app-faculty-view-all',
  templateUrl: './faculty-view-all.component.html',
  styleUrls: ['./faculty-view-all.component.css']
})
//export class FacultyViewAllComponent implements OnInit {
//  faculty:Faculty[]
  //constructor(private facultyservice:FacultyService) {
  //  this.facultyservice.GetAllFaculty().subscribe(data=>{
  //    this.faculty=data;
  //    console.log(this.faculty)
  //  });
  // }

  //ngOnInit(): void {
    
  //}
export class FacultyViewAllComponent  {
  public faculty: Faculty[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
   http.get<Faculty[]>(baseUrl + 'faculty').subscribe(result => {
     this.faculty = result;
    
    }, error => console.error(error));
  }
}



