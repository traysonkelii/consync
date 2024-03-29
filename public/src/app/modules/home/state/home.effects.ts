import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '@services/home.service';
import * as HomeActions from './home.action';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions,
        private homeService: HomeService) { }

    loadProjects$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.loadProjects),
            mergeMap(() => this.homeService.getProjects().pipe(
                map(projects => HomeActions.loadProjectsSuccess({ projects }))
            )),
        );
    });

    createProject$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.createProject),
            mergeMap(({projectRequest}) => this.homeService.createProject(projectRequest).pipe(
                map(project => HomeActions.createProjectSuccess({ project }))
            )),
            mergeMap(() => this.homeService.getProjects().pipe(
                map(projects => HomeActions.loadProjectsSuccess({ projects }))
            )),
        );
    });
}