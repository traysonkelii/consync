import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminComponent } from './component/admin/admin.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { adminReducer } from './state/admin.reducer';
import { AdminEffects } from './state/admin.effects';

@NgModule({
  declarations: [AdminComponent, AdminShellComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature('admin', adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ]
})
export class AdminModule { }
