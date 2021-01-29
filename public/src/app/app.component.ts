import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import * as RootActions from './state/app.actions';
import { RootState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  unsubscribe = new Subject<void>();
  constructor(public store: Store<RootState>) { }
  ngOnInit(): void {
    this.store.dispatch(RootActions.getUserAction());
  }

  title = 'ConSync';
}
