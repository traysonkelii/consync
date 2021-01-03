import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProjects, HomeBaseState } from './state/home.reducer';
import * as HomeActions from './state/home.action';
import { Observable } from 'rxjs';
import { Project } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<HomeBaseState>) { }

  showHeader: boolean = true;
  projects$: Observable<Project[]> | undefined;

  ngOnInit(): void {
    this.store.dispatch(HomeActions.loadProjects());
    this.projects$ = this.store.select(getProjects);
  }

  hideNav(): void {
    this.store.dispatch(HomeActions.toggleNavbar());
  }

  updatePart(part: string): void {
    this.store.dispatch(HomeActions.updatePart({ part }));
  }

  goToProject(projectId: number) {
    alert("tres");
  }
}
