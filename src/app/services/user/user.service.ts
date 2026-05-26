import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  basepath: string = "http://localhost:8080/";
  path: string = "auth/";

  constructor(
    private httpClient: HttpClient
  ){
    
  }

  login(credentials: {username: string; password:string}): Observable<any> {
    return this.httpClient.post(this.basepath + this.path + "login", credentials, {withCredentials: true })
  }

}
