import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ProjectDialogData {
  title: string,
	description: string
}

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.scss']
})
export class NewProjectModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData) { }

  ngOnInit(): void {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(data: ProjectDialogData): void {
    this.dialogRef.close(data);
  }
}
