import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {

  constructor(private route: Router) { }

  @Input() tableData:any;
  @Output() selectedItem = new EventEmitter();

  displayedColumns: string[] = ['title', 'description'];

  ngOnInit(): void {}

  // selectItem(row: any) {
  //   this.route.navigate(['/item',row._id])
  // }

  selectItem(item: any){
    this.selectedItem.emit(item._id);
  }

}
