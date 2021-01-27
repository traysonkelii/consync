import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '@services/home.service';
import { getProjects, HomeBaseState } from '../state/home.reducer';
import * as HomeActions from '../state/home.action';
import { getUser } from 'app/state/app.reducer';
import { User } from 'app/state/app.state';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
})
export class HomeShellComponent implements OnInit {

  constructor(private store: Store<HomeBaseState>) { }

  projects$!: Observable<Project[]>;
  user$!: Observable<User | undefined>;
  ngOnInit(): void {
    this.projects$ = this.store.select(getProjects);
    this.store.dispatch(HomeActions.loadProjects());
    this.user$ = this.store.select(getUser);
  }

  hideNav(): void {
    this.store.dispatch(HomeActions.toggleNavbar());
  }

  updatePart(part: string): void {
    this.store.dispatch(HomeActions.updatePart({ part }));
  }

}
