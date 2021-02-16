import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ChannelDialogData {
  title: string,
	description: string
}

@Component({
  selector: 'app-new-channel-modal',
  templateUrl: './new-channel-modal.component.html',
  styleUrls: ['./new-channel-modal.component.scss']
})
export class NewChannelModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewChannelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChannelDialogData) { }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(data: ChannelDialogData): void {
    this.dialogRef.close(data);
  }

}
