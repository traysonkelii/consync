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
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { PebbleBoardComponent } from './components/pebble-board/pebble-board.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewChannelModalComponent } from './components/new-channel-modal/new-channel-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ProjectComponent, ProjectShellComponent, ProjectHeaderComponent, PebbleBoardComponent, NewChannelModalComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
    FormsModule,
  ],
})
export class ProjectModule { }
