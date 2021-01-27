import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDisplayNav, HomeBaseState } from '../../home/state/home.reducer';
import { ProjectDialogData } from '../components/new-project-modal/new-project-modal.component';
import * as HomeActions from '../../home/state/home.action';
import { User } from 'app/state/app.state';
import { getUser } from 'app/state/app.reducer';

@Component({
  selector: 'app-header-shell',
  templateUrl: './header-shell.component.html',
})
export class HeaderShellComponent implements OnInit {

  constructor(
    private homeStore: Store<HomeBaseState>,
  ) { }

  displayNav$!: Observable<boolean>;
  user$!: Observable<User | undefined>;

  ngOnInit(): void {
    this.displayNav$ = this.homeStore.select(getDisplayNav);
    this.user$ = this.homeStore.select(getUser);
  }

  createNewProject(data: ProjectDialogData): void {
    this.homeStore.dispatch(HomeActions.createProject({ data }));
  }

}
