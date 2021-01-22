import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalCommunicationRoutingModule } from './personal-communication-routing.module';
import { PersonalCommunicationComponent } from './personal-communication.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [PersonalCommunicationComponent],
  imports: [
    CommonModule,
    PersonalCommunicationRoutingModule,
    StoreModule.forFeature('personal-communication', {}),
  ]
})
export class PersonalCommunicationModule { }
