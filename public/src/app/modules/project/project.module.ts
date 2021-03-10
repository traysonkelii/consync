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
import { NewItemModalComponent } from './components/new-item-modal/new-item-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ItemModule } from '@modules/item/item.module';

@NgModule({
  declarations: [
    ProjectComponent, 
    ProjectShellComponent, 
    ProjectHeaderComponent, 
    PebbleBoardComponent, 
    NewItemModalComponent, 
    ProjectTableComponent,
  ],
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
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([ProjectEffects]),
    FormsModule,
  ],
})
export class ProjectModule { }
