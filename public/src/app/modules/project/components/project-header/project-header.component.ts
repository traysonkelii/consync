import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProjectModalComponent } from '@modules/admin/component/new-project-modal/new-project-modal.component';
import { ChannelDialogData } from '../new-channel-modal/new-channel-modal.component';
import { ProjectTabs } from '../project/project.component';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {

  @Output() newChannel = new EventEmitter;
  @Output() tabSelected = new EventEmitter;
  @Input() projectTitle: string | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  peopleClick() {
    this.tabSelected.emit(ProjectTabs.people);
  }

  itemClick() {
    this.tabSelected.emit(ProjectTabs.item);
  }

  commitmentsClick() {
    this.tabSelected.emit(ProjectTabs.commitments);
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
