import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [

    { path: '', loadChildren: () => 
        import('./app-module').then( m => m.AppModule)
    }
]