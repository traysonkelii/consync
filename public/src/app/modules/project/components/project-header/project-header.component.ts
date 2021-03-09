import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProjectModalComponent } from '@modules/admin/component/new-project-modal/new-project-modal.component';
import { ItemDialogData } from '../new-item-modal/new-item-modal.component';
import { ProjectTabs } from '../project/project.component';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {

  @Output() newItem = new EventEmitter;
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
  
  createNewItem(): void {

    const data: ItemDialogData = {
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
        this.newItem.emit(result);
      }
    });
  }
}
