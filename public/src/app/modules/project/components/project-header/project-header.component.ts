import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProjectModalComponent } from '@modules/admin/component/new-project-modal/new-project-modal.component';
import { ChannelDialogData } from '../new-channel-modal/new-channel-modal.component';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {

  @Output() newChannel = new EventEmitter;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  createNewChannel(): void {

    const data: ChannelDialogData = {
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
        this.newChannel.emit(result);
      }
    });
  }
}
