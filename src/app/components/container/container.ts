import { Component } from '@angular/core';

interface NavbarItems {
  class: string;
  routerLink: string;
  label: string;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.html',
  styleUrls: ['./container.scss'],
  standalone: false
})
export class Container {
  navbarItems: NavbarItems[] = [
    {
      class: "nav-link active",
      routerLink: "",
      label: "Home"
    },
    {
      class: "nav-link",
      routerLink: "",
      label: "Autori"
    },
    {
      class: "nav-link",
      routerLink: "login",
      label: "Login"
    },
    {
      class: "nav-link",
      routerLink: "",
      label: "Profilo"
    }
  ];
}
