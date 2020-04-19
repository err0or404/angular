import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public city: string;
  public host = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  alertPopUp(title){
    Swal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: false,
  timer: 1500
    })
  }

  setCity(city){
    this.city = city;
  }

  getCity(){
    return this.city;
  }

  getToken(key){
    return localStorage.getItem(key);
  }

  setToken(key, value:any){
    localStorage.setItem(key, value);
  }

  removeToken(key){
    localStorage.removeItem(key);
  }

  API(method, url, data: any, form):Observable<any>{
    let httpHeaders;
    if(form){
      httpHeaders = new HttpHeaders();
    }
    else{
      httpHeaders = new HttpHeaders().set('Content-type','application/json');
    }
    let options = {
      headers: httpHeaders
    }
    if(method == 'get'){
      return this.http.get<any>(this.host+url, options);
    }
    else if(method == 'post'){
      return this.http.post<any>(this.host+url,data,options);
    }
    else if(method == 'put'){
      return this.http.put<any>(this.host+url,data,options);
    }
    else if(method == 'delete'){
      return this.http.delete<any>(this.host+url);
    }
  }
}
