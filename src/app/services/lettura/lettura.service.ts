import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LetturaService {
  basepath: string = "http://localhost:8080/"
  path: string = "lettura/";

  constructor(
    private HttpClient: HttpClient
  ){

  }

  getListLetture(): Observable<Lettura[]> {
    const authorization: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.aaBixrih2tvverkewr5Ky6Y2wDW8Gk8K9ATCPtnbNig"
    })
    return this.HttpClient.get<Lettura[]>(this.basepath + this.path + "all", {withCredentials: true})
  }

  getClassifica(): Observable<Lettura[]> {
    const authorization: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.aaBixrih2tvverkewr5Ky6Y2wDW8Gk8K9ATCPtnbNig"
    })
    return this.HttpClient.get<Lettura[]>(this.basepath + this.path + "top3", {withCredentials:true})
  }
}
