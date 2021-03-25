import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItemDialogData, NewItemModalComponent } from '../new-item-modal/new-item-modal.component';

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
  @Input() itemDetail: any;
  @Output() emitNewItem = new EventEmitter();
  @Output() emitItemSelected = new EventEmitter();

  newItemTitle: string = '';
  newItemDesc: string = '';

  currentTab: ProjectTabs = ProjectTabs.item;

  ngOnInit(): void { }
  opened: boolean = true;

  handleTabChange(event: any) {
    this.currentTab = event;
  }

  createNewItem(): void {

    const data: ItemDialogData = {
      title: '',
      description: ''
    };

    const dialogConfig: MatDialogConfig = { width: '250px', data };

    const dialogRef = this.dialog.open(
      NewItemModalComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result: { title: any; description: any; }) => {
      if (result) {
        const newItemRequest = {
          title: result.title,
          description: result.description,
          projectId: this.project.project._id,
        }
        this.emitNewItem.emit(newItemRequest)
      }
    });
  }

  itemSelected(itemId: string) {
    this.emitItemSelected.emit(itemId);
  }
}
