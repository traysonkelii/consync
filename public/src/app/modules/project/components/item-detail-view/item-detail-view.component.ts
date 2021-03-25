import { Component, Input, OnInit, Output, EventEmitter, ViewChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { getMainChannel, getMessages, ProjectState } from '@modules/project/state/project.reducer';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ProjectActions from '../../state/project.action';

@Component({
  selector: 'app-item-detail-view',
  templateUrl: './item-detail-view.component.html',
  styleUrls: ['./item-detail-view.component.scss']
})
export class ItemDetailViewComponent implements OnInit {

  @Input() item: any;
  @Output() back = new EventEmitter();
  @ViewChildren('messages')
  messages!: QueryList<any>;
  @ViewChild('content')
  content!: ElementRef;

  mainThread: any;
  activeMessage: any;
  unsubscribe = new Subject<void>();
  messageToSend = '';
  constructor(private store: Store<ProjectState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(getMainChannel),
      takeUntil(this.unsubscribe))
      .subscribe(main => {
        this.mainThread = main;
      });

    this.store.pipe(
      select(getMessages),
      takeUntil(this.unsubscribe))
      .subscribe(messages => {
        this.activeMessage = messages;
      })

    this.store.dispatch(ProjectActions.getMessageForChannel(this.mainThread[0]));

  }

  ngAfterViewInit() {
    this.scrollToBottom();
    this.messages.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) {}
  }

  backClick() {
    this.store.dispatch(ProjectActions.backButton());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  handleReply() {
    const messageRequest = {
      body: this.messageToSend,
      itemId: this.activeMessage.channel.itemId,
      channelId: this.activeMessage.channel._id,
      projectId: this.activeMessage.channel.projectId,
      mentionedUserIds: this.activeMessage.channel.members,
    }

    this.store.dispatch(ProjectActions.createNewMessage({messageRequest}));

    this.messageToSend = '';
  }
}
