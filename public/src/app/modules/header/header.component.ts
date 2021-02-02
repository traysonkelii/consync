import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'app/state/app.state';
import { NewProjectModalComponent, ProjectDialogData } from './components/new-project-modal/new-project-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) { }

  @Input() show!: boolean | null;
  @Input() user!: User | undefined | null;
  @Input() createProject!: any;
  @Output() newProject = new EventEmitter();

  createNewProject(): void {

    const data: ProjectDialogData = {
      title: '',
      description: ''
    };

    const dialogConfig: MatDialogConfig = { width: '250px', data };

    const dialogRef = this.dialog.open(
      NewProjectModalComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      this.newProject.emit(result);
    });
  }
}
