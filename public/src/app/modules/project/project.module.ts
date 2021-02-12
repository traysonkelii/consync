import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectShellComponent } from './project-shell/project-shell.component';
import { StoreModule } from '@ngrx/store';
import { projectReducer } from './state/project.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './state/project.effects';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [ProjectComponent, ProjectShellComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
    FormsModule,
  ],
})
export class ProjectModule { }
