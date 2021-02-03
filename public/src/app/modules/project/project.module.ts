import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectShellComponent } from './project-shell/project-shell.component';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './state/project.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './state/project.effects';


@NgModule({
  declarations: [ProjectComponent, ProjectShellComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
  ],
})
export class ProjectModule { }
