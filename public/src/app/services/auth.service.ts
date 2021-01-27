import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginBaseState } from '../modules/login/state/login.reducer';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(public jwtHelper: JwtHelperService) { }
  // // ...
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token') ?? 'bad Token';
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  constructor(private store: Store<LoginBaseState>) { }

  public isAuthenticated(): boolean {
    return true;
  }
}
