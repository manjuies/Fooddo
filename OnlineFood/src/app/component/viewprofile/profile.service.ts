import { Injectable } from '@angular/core';
import { Profile } from './profile';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  createUser(model):Observable<Profile>{
    return this.http.post<Profile>('http://localhost:3001/api/customer/add',model);
   
 }
 getUser():Observable<Profile[]>{
   return this.http.get<Profile[]>('http://localhost:3001/api/customer');
 
  }
  updateUser(model):Observable<Profile>{
    return this.http.put<Profile>('http://localhost:3001/api/customer/'+model._id,model); 
   }
}
