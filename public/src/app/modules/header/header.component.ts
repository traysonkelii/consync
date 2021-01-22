import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProjectModalComponent, ProjectDialogData } from './components/new-project-modal/new-project-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() show!: boolean | null;
  @Input() isLoggedIn!: boolean | null;
  @Output() newProject = new EventEmitter();

  ngOnInit(): void { }

  createNewProject(): void {

    const data: ProjectDialogData = { name: '' };

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
