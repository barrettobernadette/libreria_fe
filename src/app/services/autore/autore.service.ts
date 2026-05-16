import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoreService {
  basepath: string = "http://localhost:8080/";
  path: string = "autore/";

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getListAutori(): Observable<Autore[]> {
    const authorization: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.aaBixrih2tvverkewr5Ky6Y2wDW8Gk8K9ATCPtnbNig"
    })
    return this.httpClient.get<Autore[]>(this.basepath + this.path + "all", {headers: authorization})
  }
}
