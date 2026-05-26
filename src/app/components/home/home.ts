import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AutoreService } from '../../services/autore/autore.service';
import { Observable, catchError, forkJoin, map, of, timeout } from 'rxjs';
import { LibroService } from '../../services/libro/libro.service';
import { LetturaService } from '../../services/lettura/lettura.service';

interface HomeData {
  listaLibri: Libro[];
  listaAutori: Autore[];
  classifica: Lettura[];
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  displayedColumns: string[] = ['img', 'nome', 'cognome', 'website'];
  readonly listDati$: Observable<HomeData>;
  readonly listAutori$: Observable<Autore[]>;
  readonly listLibri$: Observable<Libro[]>;

  //forkjoin è un operatore di rxjs per poter unire più osservabili in un solo observable.
  //per poter utilizzare il forkjoin bisogna effettuare una pipe(equivalente di stream in java), si utilizza poi il map per destrutturare la variabile in entrata che corrisponde ad un array composta dagli osservabili 
  //  i contenuti dell'array verranno salvate all'interno di un oggetto come variabili così da rendere più semplice l'accesso ai dati (= destrutturo l'array con map per creare un oggetto più leggibile)
  getDati$() {
    // forkJoin([this.libroService.getListLibri(), this.autoreService.getListAutori()]).pipe(map((b) => {
    //   const [libri, autori] = b;
    //   const listaOggetti = {
    //     listaLibri: libri,
    //     listaAutori: autori
    //   }
    //   return listaOggetti;
    // }))
    return forkJoin([this.libroService.getListLibri(), this.autoreService.getListAutori(), this.letturaService.getClassifica()])
      .pipe(
        map(([libri, autori, classifica]) => ({
          listaLibri: libri,
          listaAutori: autori,
          classifica: classifica
        }))
      )
  }

  // test() {
  //   const listaLibriArr: Libro[] = [];
  //   const listaAutoriArr: Autore[] = []

  //   const getDatiArr = [[listaLibriArr, listaAutoriArr], [listaLibriArr, listaAutoriArr]] --> [{listaLibri: listaLibriArr, listaAutori: listaAutoriArr}, {listaLibri: listaLibriArr, listaAutori: listaAutoriArr}]
  //     .map(res => ({
  //       listaLibri: res[0],
  //       listaAutori: res[1]
  //     }))
  //   this.getDati$().subscribe({
  //     next: res => res.listaAutori
  //   })
  // }

  constructor(
    private autoreService: AutoreService,
    private libroService: LibroService,
    private letturaService: LetturaService
    // private cdr: ChangeDetectorRef
  ){
    this.listDati$ = this.getDati$();
    this.listAutori$ = this.autoreService.getListAutori(); 
    this.listLibri$ = this.libroService.getListLibri();
  };


}
