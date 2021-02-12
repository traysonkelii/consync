import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectDialogData, NewProjectModalComponent } from '../new-project-modal/new-project-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Output() newProject = new EventEmitter;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

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
      if (result) {
        this.newProject.emit(result);
      }
    });
  }

}
