import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminComponent } from './component/admin/admin.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { adminReducer } from './state/admin.reducer';
import { AdminEffects } from './state/admin.effects';
import { MatButtonModule } from '@angular/material/button';
import { NewProjectModalComponent } from './component/new-project-modal/new-project-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, AdminShellComponent, NewProjectModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature('admin', adminReducer),
    EffectsModule.forFeature([AdminEffects]),
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ]
})
export class AdminModule { }
