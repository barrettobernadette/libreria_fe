import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login  implements OnInit{
  form!: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ){
  
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  successMessage: string | null = null;
  login(): void {
    this.userService.login(this.form.value).subscribe({
      next: (res) => {
          console.log(res);
          this.successMessage = res.message;
          this.cdr.markForCheck();
          this.authService.setLoggedIn()
          this.router.navigate([""]).then()
      },
      error: err => {
        console.log(err);
      }
    })
  }
  
  
}
