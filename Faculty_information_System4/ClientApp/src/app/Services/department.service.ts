import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Department } from '../Models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  api_path:string='https://localhost:44366/api/Department'
  constructor(private http:HttpClient) { }
  GetAllDepartment():Observable<Department[]>
  {
    return this.http.get<Department[]>(this.api_path+'/GetAllDepartment') ;
  }
  AddDepartment(itemDepartment:Department):Observable<any>
  {
    return this.http.post(this.api_path+'/AddDepartment',itemDepartment);

  }

  
}