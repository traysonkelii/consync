import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [AuthenticationButtonComponent]
})
export class AuthenticationModule { }
