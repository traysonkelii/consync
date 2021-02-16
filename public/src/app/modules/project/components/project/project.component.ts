import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project: any;
  @Output() emitNewChannel = new EventEmitter();

  newChannelTitle: string = '';
  newChannelDesc: string = '';

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    this.ngOnInit();
  }

  handleCreateChannel(event: any) {
    const newChannelRequest = {
      title: event.title,
      description: event.description,
      projectId: this.project.project._id,
    }
    this.emitNewChannel.emit(newChannelRequest)
  }

}

/**
 * Size of pebble: # of messages
 * Plot by time = further right => later
 *
 */