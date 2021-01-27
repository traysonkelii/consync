import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDisplayNav, HomeBaseState } from '../../home/state/home.reducer';
import { ProjectDialogData } from '../components/new-project-modal/new-project-modal.component';
import * as HomeActions from '../../home/state/home.action';
import { LoginBaseState } from '../../login/state/login.reducer';

@Component({
  selector: 'app-header-shell',
  templateUrl: './header-shell.component.html',
})
export class HeaderShellComponent implements OnInit {

  constructor(
    private homeStore: Store<HomeBaseState>,
    private loginStore: Store<LoginBaseState>
  ) { }

  displayNav$!: Observable<boolean>;

  ngOnInit(): void {
    this.displayNav$ = this.homeStore.select(getDisplayNav);
  }

  createNewProject(data: ProjectDialogData): void {
    this.homeStore.dispatch(HomeActions.createProject({ data }));
  }

}
