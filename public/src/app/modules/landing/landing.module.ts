import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
