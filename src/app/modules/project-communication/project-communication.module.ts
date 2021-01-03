import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCommunicationRoutingModule } from './project-communication-routing.module';
import { ProjectCommunicationComponent } from './project-communication.component';


@NgModule({
  declarations: [ProjectCommunicationComponent],
  imports: [
    CommonModule,
    ProjectCommunicationRoutingModule
  ]
})
export class ProjectCommunicationModule { }
