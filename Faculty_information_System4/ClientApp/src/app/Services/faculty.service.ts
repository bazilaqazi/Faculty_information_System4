import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty } from '../Models/faculty';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  api_path:string='https://localhost:44366/api/Faculty';
  constructor(private http:HttpClient) { }
  GetAllFaculty():Observable<Faculty[]>
  {
    //return this.http.get<Faculty[]>(' http://localhost:62317/api/Faculty/GetAllFaculty')
    return this.http.get<Faculty[]>(this.api_path+'/GetAllFaculty') ;
  }
  GetFacultyById(id:string):Observable<Faculty>
  {
    return this.http.get<Faculty>(this.api_path+'/GetFacultyById/{id}'+id) ;
  }
  AddFaculty(items:Faculty):Observable<any>
  {
    return this.http.post(this.api_path+'/AddFaculty',items);
  }
  EditFaculty(item:Faculty):Observable<any>
  {
    return this.http.put(this.api_path+'/EditFaculty',item);
  }
  DeleteFaculty(id:string):Observable<any>
  {
    return this.http.delete(this.api_path+'/DeleteFaculty/'+id);
  }
}