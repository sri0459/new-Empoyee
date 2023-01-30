import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  constructor(private http :HttpClient) { }

  getAllData(){
    return this.http.get("http://localhost:3000/EmploeeStaff")
    .pipe(map((res :any)=>{
      return res ;
    }))
  }
}
