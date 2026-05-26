import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LettoreService {
  basepath: string = "http://localhost:8080/"
  path: string = "lettore/";

  constructor(
    private HttpClient: HttpClient
  ) {

  }

  getListLettore(): Observable<Lettore[]> {
    const authorization: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.aaBixrih2tvverkewr5Ky6Y2wDW8Gk8K9ATCPtnbNig"
    })
    return this.HttpClient.get<Lettore[]>(this.basepath + this.path + "all", {withCredentials:true})
  }
}
