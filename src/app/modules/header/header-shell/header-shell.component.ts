import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDisplayNav, HomeBaseState } from '../../home/state/home.reducer';

@Component({
  selector: 'app-header-shell',
  templateUrl: './header-shell.component.html',
})
export class HeaderShellComponent implements OnInit {

  constructor(private store: Store<HomeBaseState>) { }
  displayNav$: Observable<boolean> | undefined;
  ngOnInit(): void {
    this.displayNav$ = this.store.select(getDisplayNav)
  }

}
