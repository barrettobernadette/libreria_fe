import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

interface NavbarItems {
  class: string;
  routerLink: string;
  label: string;
  requiresAuth: boolean | null;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.html',
  styleUrls: ['./container.scss'],
  standalone: false
})
export class Container implements OnInit{

  isLoggedIn!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn$;
  }
  

  navbarItems: NavbarItems[] = [
    {
      class: "nav-link active",
      routerLink: "",
      label: "Home",
      requiresAuth: null
    },
    {
      class: "nav-link",
      routerLink: "",
      label: "Autori",
      requiresAuth: null
    },
    {
      class: "nav-link",
      routerLink: "login",
      label: "Login",
      requiresAuth: false
    },
    {
      class: "nav-link",
      routerLink: "logout",
      label:"Logout",
      requiresAuth: true
    },
    {
      class: "nav-link",
      routerLink: "",
      label: "Profilo",
      requiresAuth: true
    }
  ];

  logout(){
    this.authService.logout();
  }
}
