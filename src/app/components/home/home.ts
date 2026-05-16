import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AutoreService } from '../../services/autore/autore.service';
import { Observable, catchError, of, timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  displayedColumns: string[] = ['nome', 'cognome', 'website'];
  readonly listAutori$: Observable<Autore[]>;

  constructor(
    private autoreService: AutoreService,
    // private cdr: ChangeDetectorRef
  ){
    this.listAutori$ = this.autoreService.getListAutori();
  }
}
