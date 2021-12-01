import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
declare const loginAnimation: any;

@Component({
  selector: 'wp-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  @Input() action: string = '';
  titleComponent: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _router: Router,
  ) {
    this.authForm = this.formBuilder.group({});
    this.validatedForm();
  }

  ngOnInit(): void {
    loginAnimation();
    this.titleComponent = this.action == 'login' ? 'Iniciar sesión' : 'Registrar Usuario';
  }

  validatedForm() {
    this.authForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  registerEmail(): void {
    console.log(this.authForm.value);///*
    this.authService.registerEmail(this.authForm.value.email, this.authForm.value.password).then(response => {
      console.log('Se registró', response);///*
    });
  }

  loginWithEmail(): void {
    console.log(this.authForm.value);///*
    this.authService.loginWithEmail(this.authForm.value.email, this.authForm.value.password).then(response => {
      if (response) {
        console.log('Inicio de sesión por email', response);///*
        this._router.navigate(['/home']);
      }
    });
  }

  loginWithGoogle(): void {
    console.log(this.authForm.value);///*
    this.authService.loginWithGoogle().then(response => {
      if (response) {
        console.log('Inicio de sesión por google', response);///*
        this._router.navigate(['/home']);
      }
    });
  }

}
