import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  listaAutori: Autore[] = [
    {
      nome: "Sarah J",
      cognome: "Maas",
      website: ""
    },
    {
      nome: "Ninin",
      cognome: "Sibug",
      website: ""
    }
  ];
  displayedColumns: string[] = ['nome', 'cognome', 'website'];
}
