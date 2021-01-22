import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginBaseState } from './state/login.reducer';
import * as LoginActions from './state/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<LoginBaseState>) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log('handling submit');
    const values = this.loginForm.value;
    this.store.dispatch(LoginActions.login(values))
  }
}
