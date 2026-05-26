import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
  imports: [ReactiveFormsModule, FormsModule, CommonModule], 
})
export class Signup implements OnInit{
  step = 1;

  credentialsForm!: FormGroup;
  anagraficaForm!: FormGroup;
  autoreForm!: FormGroup;
  lettoreForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.credentialsForm = this.fb.group({
      username: [''],
      password: [''],
      role: ['ROLE_USER'],
      tipologia: ['LETTORE'] // default
    });

    this.anagraficaForm = this.fb.group({
      nome: [''],
      cognome: ['']
    });

    this.autoreForm = this.fb.group({
      website:[''],
      imgUrl:['']
    });

    this.lettoreForm = this.fb.group({
      readingGoal: [0]
    });
  }
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  submit(){
    const dati: any = {
      user: {
        username: this.credentialsForm.value.username,
        password: this.credentialsForm.value.password,
        role: "ROLE_USER"
      },
      role: this.credentialsForm.value.tipologia
    };

    if(this.credentialsForm.value.tipologia === "AUTORE") {
      dati.autore = {
        nome: this.anagraficaForm.value.nome,
        cognome: this.anagraficaForm.value.cognome,
        website: this.autoreForm.value.website
      };
    }

    if(this.credentialsForm.value.tipologia === "LETTORE") {
      dati.lettore = {
        nome: this.anagraficaForm.value.nome,
        cognome: this.anagraficaForm.value.cognome,
        readingGoal: this.lettoreForm.value.readingGoal
      }
    }

    this.userService.signup(dati).subscribe({
      next: (res) => {
        console.log("Signup ok", res);
        this.authService.setLoggedIn()
        this.router.navigate([""]).then()
      },
      error: err => {
        console.log(err);
      }
    })
  }
  
}
