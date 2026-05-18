import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AutoreService } from '../../services/autore/autore.service';
import { Observable, catchError, of, timeout } from 'rxjs';
import { LibroService } from '../../services/libro/libro.service';

// interface Book {
//   titolo: string,
//   autore: string,
//   img: string,
//   descrizione: string
// }
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
//mock per il carosello dei libri

  // books: Book[] = [
  //   {
  //      titolo: 'acotar',
  //      autore: 'sarah j maas',
  //      img: 'https://sarahjmaas.com/wp-content/uploads/2023/11/ACOTAR_1-min.jpg',
  //      descrizione: "«Un paio di occhi dorati brillavano nella boscaglia accanto a me. La foresta era silenziosa. Il vento non soffiava più. Persino la neve aveva smesso di scendere. Quel lupo era enorme. Il petto mi si strinse fino a farmi male. E in quell'istante mi resi conto che la mia vita dipendeva da una sola domanda: era solo? Afferrai l'arco e tirai indietro la corda. Non potevo permettermi di mancarlo. Non quando avevo una sola freccia con me.»"
  //   },
  //   {
  //     titolo: 'Harry Potter e la Pietra Filosofale',
  //     autore: 'J.K. Rowling',
  //     img: 'https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg',
  //     descrizione:"Harry Potter è un ragazzo normale, o quantomeno è convinto di esserlo, anche se a volte provoca strani fenomeni, come farsi ricrescere i capelli inesorabilmente tagliati dai perfidi zii. Vive con loro al numero 4 di Privet Drive: una strada di periferia come tante, dove non succede mai nulla fuori dall’ordinario. Finché un giorno, poco prima del suo undicesimo compleanno, riceve una misteriosa lettera che gli rivela la sua vera natura: Harry è un mago e la Scuola di Magia e Stregoneria di Hogwarts è pronta ad accoglierlo..."
  //   },
  //   {
  //     titolo: 'Il Trono di Spade',
  //     autore: 'George R.R. Martin',
  //     img: 'https://m.media-amazon.com/images/I/911ZuRd6r9L._SL1500_.jpg',
  //     descrizione: "In una terra fuori dal mondo, dove le estati e gli inverni possono durare intere generazioni, sta per esplodere un immane conflitto. Sul Trono di Spade, nel Sud caldo e opulento, siede Robert Baratheon. L'ha conquistato dopo una guerra sanguinosa, togliendolo all'ultimo, folle re della dinastia Targaryen, i signori dei draghi. Ma il suo potere è ora minacciato: all'estremo Nord, la Barriera - una muraglia eretta per difendere il regno da animali primordiali e, soprattutto, dagli Estranei - sembra vacillare. Si dice che gli Estranei siano scomparsi da secoli. Ma se è vero, chi sono allora quegli esseri con gli occhi così innaturalmente azzurri e gelidi, nascosti tra le ombre delle foreste, che rubano la vita, o il senno, a chi ha la mala sorte di incontrarli? La fine della lunga estate è vicina, l'inverno sta arrivando e non durerà poco: solo un nuovo prodigio potrà squarciare le tenebre."
  //   }
  // ]

  displayedColumns: string[] = ['img', 'nome', 'cognome', 'website'];
  readonly listAutori$: Observable<Autore[]>;


  readonly listLibri$: Observable<Libro[]>;

  constructor(
    private autoreService: AutoreService,
    private libroService: LibroService
    // private cdr: ChangeDetectorRef
  ){
    this.listAutori$ = this.autoreService.getListAutori(); 
    this.listLibri$ = this.libroService.getListLibri();
  };

}
