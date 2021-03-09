import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ItemDialogData {
  title: string,
	description: string
}

@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss']
})
export class NewItemModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemDialogData) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(data: ItemDialogData): void {
    this.dialogRef.close(data);
  }

}
