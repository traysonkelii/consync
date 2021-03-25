import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getItemDetail, getSelectedProject, ProjectState } from '../state/project.reducer';
import * as ProjectActions from './../state/project.action';

@Component({
  selector: 'project-shell',
  templateUrl: './project-shell.component.html',
})
export class ProjectShellComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProjectState>
  ) { }

  id!: string | null;
  project$: any;
  itemDetail$: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.store.dispatch(ProjectActions.getProjectData(
        { projectId: this.id }
      ));
      this.project$ = this.store.select(getSelectedProject);
      this.itemDetail$ = this.store.select(getItemDetail);
    }
  }

  createItem(event: any) {
    this.store.dispatch(ProjectActions.createNewItem(event));
  }

  selectItem(itemId: string) {
    this.store.dispatch(ProjectActions.getItemDetail({ itemId }));
  }
}
