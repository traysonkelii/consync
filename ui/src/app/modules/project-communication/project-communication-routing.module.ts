import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectCommunicationComponent } from './project-communication.component';

const routes: Routes = [{ path: '', component: ProjectCommunicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCommunicationRoutingModule { }
