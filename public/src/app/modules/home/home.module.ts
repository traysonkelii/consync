import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent, HomeShellComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
