import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemShellComponent } from './item-shell/item-shell.component';

const routes: Routes = [
  {path: ':id', component: ItemShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
