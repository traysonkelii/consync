import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalCommunicationComponent } from './personal-communication.component';

const routes: Routes = [{ path: '', component: PersonalCommunicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCommunicationRoutingModule { }
