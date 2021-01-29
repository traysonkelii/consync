import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Permissions, User } from 'app/state/app.state';
import { NewProjectModalComponent, ProjectDialogData } from './components/new-project-modal/new-project-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() show!: boolean | null;
  @Input() user!: User | undefined | null;
  @Output() newProject = new EventEmitter();
  permissions = Permissions;
  canCreate = false;

  ngOnInit(): void {
    this.user?.permissions.map(perm => {
      if (perm === this.permissions.createUser) {
        this.canCreate = true;
      }
    });
  }

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
