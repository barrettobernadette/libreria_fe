import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Container } from './components/container/container';
import { RouterModule } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import { Signup } from './components/signup/signup';

@NgModule({
  declarations: [Container, Login, Home],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
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
          },
          {
            path: 'signup',
            component: Signup
          }
        ]
      }
    ])
  ],
})
export class AppModule {}
