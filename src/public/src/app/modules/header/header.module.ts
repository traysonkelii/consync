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
import { NewProjectModalComponent } from './components/new-project-modal/new-project-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [HeaderComponent, HeaderShellComponent, NewProjectModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    HomeModule,
    RouterModule,
    MatFormFieldModule,
  ],
  exports: [HeaderShellComponent],
})
export class HeaderModule { }
