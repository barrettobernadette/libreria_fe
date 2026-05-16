import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Container } from './components/container/container';
import { RouterModule } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [Container, Login, Home],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: Container,
        children: [
          {
            path: '',
            component: Home
          },
          {
            path: 'login',
            component: Login
          }
        ]
      }
    ])
  ],
})
export class AppModule {}
