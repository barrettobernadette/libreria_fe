import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AutoreService } from '../../services/autore/autore.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  listaAutori?: Autore[];
  displayedColumns: string[] = ['nome', 'cognome', 'website'];

  constructor(
    private autoreService: AutoreService,
    private cdr: ChangeDetectorRef
  ){
    autoreService.getListAutori().subscribe({
      next: res => {
        this.listaAutori = res;
      },
      complete: () => this.cdr.markForCheck()
    })
  }
}
