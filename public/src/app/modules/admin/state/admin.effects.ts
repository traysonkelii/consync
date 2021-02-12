import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AdminService } from "@services/admin.service";
import { map, mergeMap } from "rxjs/operators";
import * as AdminActions from './admin.action';

@Injectable()
export class AdminEffects {
    constructor(private actions$: Actions,
        private adminService: AdminService) { }

    loadProjects$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AdminActions.loadAdminProjects),
            mergeMap(() => this.adminService.getAdminProjects().pipe(
                map(projects => AdminActions.loadAdminProjectsSuccess({ projects }))
            )),
        )
    });

    createProject$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AdminActions.createProject),
            mergeMap(({ projectRequest }) => this.adminService.createProject(projectRequest).pipe(
                map(project => AdminActions.createProjectSuccess({ project }))
            )),
            mergeMap(() => this.adminService.getAdminProjects().pipe(
                map(projects => AdminActions.loadAdminProjectsSuccess({ projects }))
            ))
        )
    });
}