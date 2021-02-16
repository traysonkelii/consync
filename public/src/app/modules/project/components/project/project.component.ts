import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  handleCreateChannel() {
    const newChannelRequest = {
      title: this.newChannelTitle,
      description: this.newChannelDesc,
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