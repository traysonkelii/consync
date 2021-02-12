import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectDialogData } from '../component/new-project-modal/new-project-modal.component';
import { AdminState } from '../state/admin.reducer';
import * as AdminActions from '../state/admin.action';


@Component({
  selector: 'app-admin-shell',
  templateUrl: './admin-shell.component.html',
})
export class AdminShellComponent implements OnInit {

  constructor(
    private store: Store<AdminState>
  ) { }

  ngOnInit(): void {
  }

  createNewProject({ title, description }: ProjectDialogData): void {
    const projectRequest = {
      title,
      description
    }

    this.store.dispatch(AdminActions.createProject({ projectRequest }));
  }
}
