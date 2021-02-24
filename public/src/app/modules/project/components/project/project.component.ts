import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChannelDialogData, NewChannelModalComponent } from '../new-channel-modal/new-channel-modal.component';

export enum ProjectTabs {
  item = 'item',
  people = 'people',
  commitments = 'commitments'
}

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() project: any;
  @Output() emitNewChannel = new EventEmitter();

  newChannelTitle: string = '';
  newChannelDesc: string = '';

  currentTab: ProjectTabs = ProjectTabs.item;

  ngOnInit(): void { }
  opened: boolean = true;

  handleCreateChannel(event: any) {
  }

  handleTabChange(event: any) {
    this.currentTab = event;
  }

  createNewChannel(): void {

    const data: ChannelDialogData = {
      title: '',
      description: ''
    };

    const dialogConfig: MatDialogConfig = { width: '250px', data };

    const dialogRef = this.dialog.open(
      NewChannelModalComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result: { title: any; description: any; })=> {
      if (result) {
        const newChannelRequest = {
          title: result.title,
          description: result.description,
          projectId: this.project.project._id,
        }
        this.emitNewChannel.emit(newChannelRequest)
      }
    });
  }
}
