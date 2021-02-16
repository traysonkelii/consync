import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pebble-board',
  templateUrl: './pebble-board.component.html',
  styleUrls: ['./pebble-board.component.scss']
})
export class PebbleBoardComponent implements OnInit {

  @Input() channels: any;
  constructor() { }

  ngOnInit(): void { 
    // console.log(this.channels);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.ngOnInit();
  }
}
