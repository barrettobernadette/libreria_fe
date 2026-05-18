import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  basepath: string = "http://localhost:8080/";
  path: string = "libro/";

  constructor(
    private httpClient: HttpClient
  ){

  }

  getListLibri(): Observable<Libro[]> {
    const authorization: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiJ9.aaBixrih2tvverkewr5Ky6Y2wDW8Gk8K9ATCPtnbNig"
    })
    return this.httpClient.get<Libro[]>(this.basepath + this.path +"all",{headers:authorization})
  }
}
