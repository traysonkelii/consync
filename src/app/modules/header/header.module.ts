import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from 'src/app/modules/home/home.module';
import { HeaderShellComponent } from './header-shell/header-shell.component';


@NgModule({
  declarations: [HeaderComponent, HeaderShellComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HomeModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
