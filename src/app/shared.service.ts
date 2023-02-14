import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseurl : string ="https://localhost:7263/api/Values/";
  constructor(private http:HttpClient) { }
  
  signpost(val: any) {
    return this.http.post<any>(`${this.baseurl}register`, val);
  }
  login(val: any) {
    return this.http.post<any>(`${this.baseurl}auth`, val);
  }
}
