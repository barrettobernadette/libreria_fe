import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../cookie/cookie.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(
    private cookieService: CookieService
  ){

  }

  setLoggedIn() {
    this.loggedIn.next(true);
  }

  logout(){
    return this.cookieService.logout().subscribe(() => {
      this.loggedIn.next(false);
    })
  }
}
