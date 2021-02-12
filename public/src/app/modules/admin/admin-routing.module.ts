import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminShellComponent } from './admin-shell/admin-shell.component';

const routes: Routes = [{ path: '', component: AdminShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
