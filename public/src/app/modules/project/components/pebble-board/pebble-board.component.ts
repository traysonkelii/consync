import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pebble-board',
  templateUrl: './pebble-board.component.html',
  styleUrls: ['./pebble-board.component.scss']
})
export class PebbleBoardComponent implements OnInit {

  @Input() items: any;
  constructor(private route: Router) { }

  ngOnInit(): void { 
  }

  goToItem(item:any) {
    this.route.navigate(['/item',item._id])
  }

}
