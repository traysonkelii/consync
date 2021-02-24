import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() tableData:any;

  displayedColumns: string[] = ['title', 'description'];

  ngOnInit(): void {}

  goToItem(row: any) {
    this.route.navigate(['/item',row._id])
  }

}
